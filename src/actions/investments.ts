'use server';

import { verifyAdmin } from './auth';
import { GetAdminInvestments, InvestmentWithUser } from '@/interfaces/investment.interface';
import { getOneProjectBasic } from './projects';
import { validateWalletBalance } from './wallets';
import { prisma } from './prisma';

export const getInvestments = async ({
  page = 1,
  limit = 10,
  filters,
}): Promise<{ investments: GetAdminInvestments[]; total: number }> => {
  const handleInvestmentFilters = (filters: Record<string, any>) => {
    const investmentFilters: Record<string, any> = {};

    if (filters.search && filters.search !== '') {
      investmentFilters.OR = [
        {
          project: {
            title: {
              contains: filters.search,
              mode: 'insensitive',
            },
          },
        },
        {
          project: {
            address: {
              contains: filters.search,
              mode: 'insensitive',
            },
          },
        },
      ];
      return investmentFilters;
    }
  };
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  let investments;
  let total;
  console.log(filters);
  if (filters) {
    investments = await prisma.investment.findMany({
      include: {
        user: true,
        project: true,
      },
      where: { ...handleInvestmentFilters(filters) },
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.investment.count({
      where: { ...handleInvestmentFilters(filters) },
    });
  } else {
    investments = await prisma.investment.findMany({
      include: {
        user: true,
        project: true,
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    total = await prisma.investment.count();
  }
  return { investments, total };
};

export const getInvestmentsByProjectId = async ({ projectId }: { projectId: number }): Promise<InvestmentWithUser[]> => {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const project = await getOneProjectBasic(projectId);
  if (!project) {
    throw new Error('Project not found');
  }

  try {
    const investments = await prisma.investment.findMany({
      where: {
        projectId: project.projectId,
      },
      include: {
        user: true,
      },
    });
    return investments;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching investments');
  }
};

export const confirmInvestmentTransaction = async ({
  userId,
  walletId,
  projectId,
  amount,
}: {
  userId: string;
  walletId: number;
  projectId: number;
  amount: number;
}) => {
  return await prisma.$transaction(async (prisma) => {
    await validateWalletBalance(userId, amount);

    // Crear la inversión
    const investment = await prisma.investment.create({
      data: {
        userId,
        projectId,
        amount,
      },
    });

    // Registrar la transacción
    const transaction = await prisma.transaction.create({
      data: {
        walletId,
        amount,
        type: 'SPEND',
        investmentId: investment.investmentId,
        status: 'PENDING',
      },
    });

    // Actualizar el saldo de la wallet
    await prisma.wallet.update({
      where: { walletId },
      data: {
        balance: {
          decrement: amount,
        },
      },
    });

    // Actualizar el progreso del proyecto
    await prisma.project.update({
      where: { projectId },
      data: {
        projectValueActual: {
          increment: amount,
        },
      },
    });

    await prisma.transaction.update({
      where: { transactionId: transaction.transactionId },
      data: {
        status: 'APPROVED',
      },
    });

    return transaction;
  });
};
