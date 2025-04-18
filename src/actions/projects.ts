'use server';
import { PrismaClient, Project } from '@prisma/client';
import { getUser, verifyAdmin } from './auth';
import { ProjectFormValues, ProjectWithInvestmentsAndUsers, IProject } from '@/interfaces/project.interface';

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
}: GetProjectsArgs): Promise<{ projects: ProjectWithInvestmentsAndUsers[]; total: number }> => {
  const handleProjectFilters = (filters: Record<string, any>) => {
    const dynamicFilters: Record<string, any> = {};
    if (filters.search && filters.search !== '') {
      dynamicFilters.OR = [
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
    Object.keys(filters).forEach((key) => {
      if (key !== 'search' && filters[key] !== undefined && filters[key] !== '') {
        dynamicFilters[key] = filters[key];
      }
    });
    return dynamicFilters;
  };
  let projects;
  let total;
  if (filters) {
    projects = await prisma.project.findMany({
      where: {
        ...handleProjectFilters(filters),
      },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        Investment: {
          include: {
            user: true,
          },
        },
      },
    });
    total = await prisma.project.count({
      where: {
        ...handleProjectFilters(filters),
      },
    });
  } else {
    projects = await prisma.project.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        Investment: {
          include: {
            user: true,
          },
        },
      },
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

export const getProjectsByUser = async (page = 1, limit = 10): Promise<IProject[]> => {
  const user = await getUser();
  if (!user) {
    throw new Error('No user found');
  }

  const projects = await prisma.project.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: {
      Investment: {
        some: {
          userId: user.userId,
        },
      },
    },
  });

  const projectsWithInvestmentSum = await Promise.all(
    projects.map(async (project) => {
      const totalInvestment = await prisma.investment.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          projectId: project.projectId,
        },
      });

      return {
        ...project,
        totalInvestmentAmount: Number(totalInvestment._sum.amount || 0),
      };
    })
  );

  return projectsWithInvestmentSum;
};

export const getProjectByUser = async (projectId: number): Promise<IProject> => {
  const user = await getUser();
  if (!user) {
    throw new Error('Unauthorized or user not found');
  }

  const project = await prisma.project.findUnique({
    where: {
      projectId: Number(projectId),
    },
  });

  if (!project) {
    throw new Error('Project not found');
  }

  const userInvestment = await prisma.investment.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      projectId: Number(projectId),
      userId: user.userId,
    },
  });

  return {
    ...project,
    totalInvestmentAmount: Number(userInvestment._sum.amount),
  };
};

export const getProjectById = async (projectId: number): Promise<Project> => {
  const project = await prisma.project.findUnique({
    where: {
      projectId: Number(projectId),
    },
  });

  if (!project) {
    throw new Error('Project not found');
  }

  return project;
};
