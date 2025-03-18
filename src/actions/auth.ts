'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handleUserLogin = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('No user ID found');
  }

  const user = await currentUser();

  if (!user) {
    throw new Error('No user found');
  }

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

export const verifyAdmin = async () => {
  const user = await handleUserLogin();
  return user.role === 'admin';
};
