import { prisma } from './prisma';

import { auth } from '@clerk/nextjs/server';
import { getWalletId } from './wallets';

export const getTransactionById = async (transactionId: number) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  const walletId = await getWalletId(userId);

  const transaction = await prisma.transaction.findUnique({
    where: {
      transactionId,
    },
    include: {
      wallet: true,
      investment: {
        include: {
          project: true,
        },
      },
    },
  });

  if (!transaction) {
    throw new Error('Transaction not found');
  }

  if (transaction !== null && transaction.walletId !== walletId) {
    throw new Error('Forbidden');
  }

  return transaction;
};
