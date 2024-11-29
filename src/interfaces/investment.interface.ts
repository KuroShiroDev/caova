import { Project, User } from '@prisma/client';

export interface GetAdminInvestments {
  amount: bigint;
  transaction_status: string;
  createdAt: Date;
  investmentId: number;
  userId: string;
  projectId: number;
  user: User;
  project: Project;
}
