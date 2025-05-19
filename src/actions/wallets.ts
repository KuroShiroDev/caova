'use server';

import { prisma } from './prisma';

export const validateWalletBalance = async (userId: string, investmentAmount: number): Promise<boolean> => {
  const wallet = await prisma.wallet.findUnique({
    where: { userId },
  });

  if (!wallet || wallet.balance < investmentAmount) {
    throw new Error('Saldo insuficiente en la wallet');
  }

  return true;
};

export const getWalletId = async (userId: string): Promise<number | null> => {
  const wallet = await prisma.wallet.findUnique({
    where: { userId },
  });

  if (!wallet) {
    throw new Error('Wallet not found');
  }

  return wallet.walletId;
};
