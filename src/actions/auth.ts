'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import { prisma } from './prisma';

export const isLogged = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
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
  const loggedInUser = await isLogged();

  if (!loggedInUser) {
    return null;
  }

  const { userId, user } = loggedInUser;

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
        Wallet: {
          create: {
            balance: 0,
          },
        },
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
    include: {
      Wallet: true,
    },
  });
};

export const verifyAdmin = async () => {
  const user = await handleUserLogin();
  if (user === null) {
    return false;
  }
  return user.role === 'admin';
};
