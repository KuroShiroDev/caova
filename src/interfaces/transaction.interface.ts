import { TransactionType, TransactionStatus } from '@prisma/client';

export interface TransactionWithInvestment {
  amount: bigint | number;
  createdAt: Date;
  updatedAt: Date;
  transactionId: string;
  type: TransactionType;
  walletId: string;
  paymentMethodType?: string | null;
  investmentId?: string | null;
  reference?: string | null;
  externalId?: string | null;
  status: TransactionStatus;
  investment?: {
    investmentId: string;
    projectName?: string;
  } | null;
}