import { Project } from '@prisma/client';

export interface Investment {
  investmentId: string;
  amount: number;
  transaction_status: string;
  project: Project;
  createdAt: string;
}

export interface AdaptedInvestment {
  projectId: number;
  title: string;
  address: string;
  description: string;
  projectValueTotal: number;
  projectValueActual: number;
  createdAt: string;
  startIncomeDate: string;
  media: string[];
  documents: string[];
}
