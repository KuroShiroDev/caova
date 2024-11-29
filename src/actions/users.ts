'use server';

import { PrismaClient, User } from '@prisma/client';
import { verifyAdmin } from './auth';

const prisma = new PrismaClient();
export const getUsers = async ({ page = 1, limit = 10 }): Promise<{ users: User[]; total: number }> => {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }
  const users = await prisma.user.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });
  const total = await prisma.user.count();
  return { users, total };
};
