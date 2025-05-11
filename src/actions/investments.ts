'use server';

import { PrismaClient } from '@prisma/client';
import { verifyAdmin } from './auth';
import { GetAdminInvestments, InvestmentWithUser } from '@/interfaces/investment.interface';
import { getOneProjectBasic } from './projects';

const prisma = new PrismaClient();

export const getInvestments = async ({
  page = 1,
  limit = 10,
  filters,
}): Promise<{ investments: GetAdminInvestments[]; total: number }> => {
  const handleInvestmentFilters = (filters: Record<string, any>) => {
    const investmentFilters: Record<string, any> = {};

    if (filters.search && filters.search !== '') {
      investmentFilters.OR = [
        {
          project: {
            title: {
              contains: filters.search,
              mode: 'insensitive',
            },
          },
        },
        {
          project: {
            address: {
              contains: filters.search,
              mode: 'insensitive',
            },
          },
        },
      ];
      return investmentFilters;
    }
  };
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  let investments;
  let total;
  if (filters) {
    investments = await prisma.investment.findMany({
      include: {
        user: true,
        project: true,
      },
      where: { ...handleInvestmentFilters(filters) },
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.investment.count({
      where: { ...handleInvestmentFilters(filters) },
    });
  } else {
    investments = await prisma.investment.findMany({
      include: {
        user: true,
        project: true,
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.investment.count();
  }
  return { investments, total };
};

export const getInvestmentsByProjectId = async ({ projectId }: { projectId: number }): Promise<InvestmentWithUser[]> => {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const project = await getOneProjectBasic(projectId);
  if (!project) {
    throw new Error('Project not found');
  }

  try {
    const investments = await prisma.investment.findMany({
      where: {
        projectId: project.projectId,
      },
      include: {
        user: true,
      },
    });
    return investments;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching investments');
  }
};
