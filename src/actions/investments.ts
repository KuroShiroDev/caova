'use server';

import { PrismaClient } from '@prisma/client';
import { verifyAdmin } from './auth';
import { GetAdminInvestments } from '@/interfaces/investment.interface';

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
  console.log(filters);
  if (filters) {
    investments = await prisma.investement.findMany({
      include: {
        user: true,
        project: true,
      },
      where: { ...handleInvestmentFilters(filters) },
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.investement.count({
      where: { ...handleInvestmentFilters(filters) },
    });
  } else {
    investments = await prisma.investement.findMany({
      include: {
        user: true,
        project: true,
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.investement.count();
  }
  return { investments, total };
};
