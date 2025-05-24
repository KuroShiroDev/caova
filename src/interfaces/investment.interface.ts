import { Project, User } from '@prisma/client';

export interface GetAdminInvestments {
  amount: bigint;
  transaction_status: string;
  createdAt: Date;
  investmentId: number;
  userId: string;
  projectId: string;
  user: User;
  project: Project;
}

export interface InvestmentWithUser {
  amount: bigint;
  createdAt: Date;
  investmentId: string;
  projectId: string;
  user: User;
}
