'use server';

import { TransactionStatus } from '@prisma/client';
import { prisma } from './prisma';
import { updateRechargeTransaction } from './transactions';

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

export const updateWalletBalance = async (
  externalId: string,
  reference: string,
  status: TransactionStatus,
  paymentMethodType?: string
): Promise<void> => {
  console.log(paymentMethodType, externalId);
  const transaction = await updateRechargeTransaction(externalId, reference, status, paymentMethodType);
  if (!transaction) {
    throw new Error('Transaction not found');
  }
  const wallet = await prisma.wallet.findUnique({
    where: { walletId: transaction.walletId },
  });

  if (!wallet) {
    throw new Error('Wallet not found');
  }

  if (status === TransactionStatus.APPROVED) {
    wallet.balance += BigInt(transaction.amount);
    await prisma.wallet.update({
      where: { walletId: wallet.walletId },
      data: { balance: wallet.balance },
    });
  }
};
