'use server';

import { PrismaClient } from '@prisma/client';
import { getUser } from './auth';

const prisma = new PrismaClient();

export const getUserInvestments = async () => {
  const user = await getUser();

  if (!user) {
    throw new Error('No user found');
  }

  const investments = await prisma.$queryRaw`
    SELECT i."projectId", SUM(i.amount) as "totalAmount", p.*
    FROM "Investement" i
    JOIN "Project" p ON i."projectId" = p."projectId"
    GROUP BY i."projectId", p."projectId"
    HAVING STRING_AGG(i."userId", ',') LIKE CONCAT('%', ${user.userId}, '%')
  `;

  console.log(investments);

  return investments;
};
