'use server';
import { PrismaClient, Project } from '@prisma/client';
import { getUser, verifyAdmin } from './auth';
import { CreateProject, IProject } from '@/interfaces/project.interface';

const prisma = new PrismaClient();

export const createProject = async (values: CreateProject): Promise<Project> => {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const project = await prisma.project.create({
    data: values,
  });
  return project;
};

export const getProjects = async ( page = 1, limit = 10 ): Promise<Project[]> => {
  const projects = await prisma.project.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });
  return projects;
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
      const totalInvestment = await prisma.investement.aggregate({
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

  const userInvestment = await prisma.investement.aggregate({
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
