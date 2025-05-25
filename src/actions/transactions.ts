import { prisma } from './prisma';

import { auth } from '@clerk/nextjs/server';
import { getWalletId } from './wallets';
import { Transaction, TransactionStatus } from '@prisma/client';

export const getTransactionsWithInvestment = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  const wallet = await prisma.wallet.findUnique({
    where: {
      userId,
    },
  });

  if (!wallet) {
    throw new Error('Wallet not found');
  }

  const transactions = await prisma.transaction.findMany({
    where: {
      wallet,
    },
    include: {
      investment: {
        include: {
          project: true,
        },
      },
    },
  });

  return transactions.map((t) => ({
    amount: t.amount,
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
    transactionId: t.transactionId,
    type: t.type,
    walletId: t.walletId,
    paymentMethodType: t.paymentMethodType,
    investmentId: t.investmentId,
    reference: t.reference,
    externalId: t.externalId,
    status: t.status,
    investment: t.investment
      ? {
          investmentId: t.investment.investmentId,
          projectName: t.investment.project?.title ?? undefined,
        }
      : null,
  }));
};

export const getTransactionById = async (transactionId: string) => {
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
