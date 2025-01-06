'use server';

import { PrismaClient, User } from '@prisma/client';
import { verifyAdmin } from './auth';

const prisma = new PrismaClient();
export const getUsers = async ({ page = 1, limit = 10, filters }): Promise<{ users: User[]; total: number }> => {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const handleAdminProjecctFilters = (filters: Record<string, any>) => {
    const adminFilters: Record<string, any> = {};

    if (filters.search && filters.search !== '') {
      adminFilters.OR = [
        {
          name: {
            contains: filters.search,
            mode: 'insensitive',
          },
        },
        {
          email: {
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

  let users;
  let total;
  if (filters) {
    users = await prisma.user.findMany({
      where: {
        ...handleAdminProjecctFilters(filters),
      },
    });
    total = await prisma.user.count({
      where: {
        ...handleAdminProjecctFilters(filters),
      },
    });
  } else {
    users = await prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.user.count();
  }

  return { users, total };
};
