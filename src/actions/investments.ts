'use server';

import { PrismaClient } from '@prisma/client';
import { verifyAdmin } from './auth';
import { GetAdminInvestments } from '@/interfaces/investment.interface';

const prisma = new PrismaClient();

export const getInvestments = async ({
  page = 1,
  limit = 10,
}): Promise<{ investments: GetAdminInvestments[]; total: number }> => {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }
  const investments = await prisma.investement.findMany({
    include: {
      user: true,
      project: true,
    },
    skip: (page - 1) * limit,
    take: limit,
  });
  const total = await prisma.investement.count();
  return { investments, total };
};
