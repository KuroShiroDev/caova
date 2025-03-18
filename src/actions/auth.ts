'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const isLogged = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('No user ID found');
  }

  const user = await currentUser();

  if (!user) {
    throw new Error('No user found');
  }

  return {
    userId,
    user,
  };
};

export const handleUserLogin = async () => {
  const { user, userId } = await isLogged();

  let dbUser = await prisma.user.findUnique({
    where: {
      userId,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        userId,
        email: user.emailAddresses[0].emailAddress ?? '',
        name: user.fullName ?? '',
      },
    });
  }

  return dbUser;
};

export const getUser = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('No user ID found');
  }

  return prisma.user.findUnique({
    where: {
      userId,
    },
  });
};

export const verifyAdmin = async () => {
  const user = await handleUserLogin();
  return user.role === 'admin';
};
