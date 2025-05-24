import { prisma } from './prisma';

import { auth } from '@clerk/nextjs/server';
import { getWalletId } from './wallets';
import { Transaction, TransactionStatus } from '@prisma/client';

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

export const getTransactionByExternalId = async (externalId: string) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('Unauthorized');
  }
  const walletId = await getWalletId(userId);

  const transaction = await prisma.transaction.findUnique({
    where: {
      externalId,
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

export const createRechargeTransaction = async (amount: bigint, reference: string): Promise<Transaction> => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  const walletId = await getWalletId(userId);

  if (!walletId) {
    throw new Error('Wallet not found');
  }

  const existing = await prisma.transaction.findUnique({ where: { reference } });
  if (existing) return existing;

  const transaction = await prisma.transaction.create({
    data: {
      walletId,
      amount,
      type: 'RECHARGE',
      status: 'PENDING',
      reference,
    },
  });

  return transaction;
};

export const updateRechargeTransaction = async (
  externalId: string,
  reference: string,
  status: TransactionStatus,
  paymentMethodType?: string
) => {
  try {
    const transaction = await prisma.transaction.update({
      where: { reference },
      data: { status, externalId, paymentMethodType },
    });
    return transaction;
  } catch (error) {
    console.error('Error updating transaction:', error);
    throw error;
  }
};
