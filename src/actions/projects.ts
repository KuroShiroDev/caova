'use server';
import { Prisma, Project } from '@prisma/client';
import { getUser, verifyAdmin } from './auth';
import { ProjectFormValues, ProjectWithInvestmentsAndUsers, IProject, ProjectDocuments } from '@/interfaces/project.interface';
import { prisma } from './prisma';

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

// PROJECT STORAGE

const _addItemsToProjectField = async (
  projectId: number,
  items: string[] | { [key: string]: string }[],
  field: 'media' | 'documents'
) => {
  await verifyAdmin();
  const project = await getOneProjectBasic(projectId);

  const currentItems = (project[field] as string[]) || [];

  const updatedProject = await prisma.project.update({
    where: {
      projectId: projectId,
    },
    data: {
      [field]: [...items, ...currentItems],
    },
  });

  return updatedProject;
};

export const _removeItemsFromProjectField = async (
  projectId: number,
  items: string[],
  field: 'media' | 'documents'
): Promise<Project> => {
  await verifyAdmin();
  const project = await getOneProjectBasic(projectId);

  let newFilesArr: string[] | ProjectDocuments = [];
  if (field === 'documents') {
    newFilesArr = (project.documents as unknown as ProjectDocuments).filter((document) => !items.includes(document.url));
  } else if (field === 'media') {
    newFilesArr = project.media.filter((item) => !items.includes(item));
  }

  const updatedProject = await prisma.project.update({
    where: {
      projectId: projectId,
    },
    data: {
      [field]: newFilesArr,
    },
  });

  return updatedProject;
};

// PROJECT MEDIA

export const addMediaToProject = async (projectId: number, urls: string[]) => {
  return _addItemsToProjectField(projectId, urls, 'media');
};

export const removeMediaFromProject = async (projectId: number, urls: string[]): Promise<Project> => {
  return _removeItemsFromProjectField(projectId, urls, 'media');
};

// PROJECT DOCUMENTS

export const addFilesToProject = async (projectId: number, urls: string[] | { [key: string]: string }[]) => {
  return _addItemsToProjectField(projectId, urls, 'documents');
};

export const removeFilesFromProject = async (projectId: number, urls: string[]): Promise<Project> => {
  return _removeItemsFromProjectField(projectId, urls, 'documents');
};

export const updateDocumentName = async (projectId: number, oldName: string, newName: string): Promise<Project> => {
  await verifyAdmin();
  try {
    await verifyAdmin();
    const project = await getOneProjectBasic(projectId);
    const currentDocuments = (project.documents as unknown as ProjectDocuments) || [];

    const documentToUpdate = currentDocuments.find((doc) => doc.name === oldName);
    if (!documentToUpdate) {
      throw new Error(`File "${oldName}" not found in project documents`);
    }

    const updatedDocuments: ProjectDocuments = currentDocuments.map((doc) => {
      if (doc.name === oldName) {
        return {
          name: newName,
          url: doc.url,
        };
      }
      return doc;
    });

    const prismaJsonDocuments = updatedDocuments as unknown as Prisma.InputJsonValue[];

    const updatedProject = await prisma.project.update({
      where: {
        projectId: projectId,
      },
      data: {
        documents: prismaJsonDocuments,
      },
    });

    return updatedProject;
  } catch (error) {
    console.error('Error updating filename:', error);

    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('Failed to update filename');
    }
  }
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
