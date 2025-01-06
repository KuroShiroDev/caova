'use server';
import { PrismaClient, Project } from '@prisma/client';
import { verifyAdmin } from './auth';
import { ProjectFormValues } from '@/interfaces/project.interface';

const prisma = new PrismaClient();

interface GetProjectsArgs {
  page?: number;
  limit?: number;
  filters?: Record<string, any>;
}

export const createProject = async (values: ProjectFormValues): Promise<Project> => {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const project = await prisma.project.create({
    data: values,
  });
  return project;
};

export const getProjects = async ({
  page = 1,
  limit = 10,
  filters,
}: GetProjectsArgs): Promise<{ projects: Project[]; total: number }> => {
  const handleAdminProjectFilters = (filters: Record<string, any>) => {
    const adminFilters: Record<string, any> = {};
    if (filters.search && filters.search !== '') {
      adminFilters.OR = [
        {
          title: {
            contains: filters.search,
            mode: 'insensitive',
          },
        },
        {
          address: {
            contains: filters.search,
            mode: 'insensitive',
          },
        },
      ];
    }
    if (filters.status) {
      adminFilters.status = filters.status;
    }
    return adminFilters;
  };
  let projects;
  let total;
  if (filters) {
    projects = await prisma.project.findMany({
      where: {
        ...handleAdminProjectFilters(filters),
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.project.count({
      where: {
        ...handleAdminProjectFilters(filters),
      },
    });
  } else {
    projects = await prisma.project.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.project.count();
  }

  return { projects, total };
};

export const getOneProjectBasic = async (projectId: number): Promise<Project> => {
  const project = await prisma.project.findUnique({
    where: {
      projectId,
    },
  });
  if (!project) {
    throw new Error('Project not found');
  }
  return project;
};

export const updateProject = async (projectId: number, values: ProjectFormValues): Promise<Project> => {
  await verifyAdmin();
  const project = await prisma.project.update({
    where: {
      projectId,
    },
    data: values,
  });
  return project;
};

// PROJECT MEDIA

export const addMediaToProject = async (projectId: number, urls: string[]) => {
  await verifyAdmin();
  const project = await getOneProjectBasic(projectId);

  const updatedProject = await prisma.project.update({
    where: {
      projectId: projectId,
    },
    data: {
      media: [...urls, ...project.media],
    },
  });

  return updatedProject;
};

export const removeMediaFromProject = async (projectId: number, urls: string[]): Promise<Project> => {
  await verifyAdmin();
  const project = await getOneProjectBasic(projectId);

  const updatedProject = await prisma.project.update({
    where: {
      projectId: projectId,
    },
    data: {
      media: project.media.filter((media) => !urls.includes(media)),
    },
  });

  return updatedProject;
};
