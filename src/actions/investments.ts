'use server';

import { PrismaClient } from '@prisma/client';
import { getUser } from './auth';
import { UserProject } from '@/interfaces/project.interface';

const prisma = new PrismaClient();

export const getUserInvestments = async (): Promise<UserProject[]> => {
  const user = await getUser();

  if (!user) {
    throw new Error('No user found');
  }

  const investments = await prisma.$queryRaw<UserProject[]>`
  SELECT i."projectId", SUM(i.amount) as "totalInvestmentAmount", p.*
  FROM "Investement" i
  JOIN "Project" p ON i."projectId" = p."projectId"
  WHERE i."transaction_status" = 'APPROVE'
  GROUP BY i."projectId", p."projectId"
  HAVING STRING_AGG(i."userId", ',') LIKE CONCAT('%', ${user.userId}, '%')
`;

  const formattedInvestments = investments.map((investment) => ({
    ...investment,
    totalInvestmentAmount: Number(investment.totalInvestmentAmount),
  }));

  return formattedInvestments;
};
