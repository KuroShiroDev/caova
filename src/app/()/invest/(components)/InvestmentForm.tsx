'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { currencyFormat } from '@/lib/utils';
import InvestmentAmount from './InvestmentAmount';
import { confirmInvestmentTransaction } from '@/actions/investments';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface InvestmentFormProps {
  minInvestmentAmount: number;
  maxInvestmentAmount: number;
  rentalYieldsAnnualCash: number;
  userId: string;
  walletId: string;
  projectId: string;
}

export default function InvestmentForm({
  minInvestmentAmount,
  maxInvestmentAmount,
  rentalYieldsAnnualCash,
  userId,
  walletId,
  projectId,
}: InvestmentFormProps) {
  const [investmentAmount, setInvestmentAmount] = useState<number>(minInvestmentAmount);
  const { toast } = useToast();

  const router = useRouter();

  const handleInvestmentChange = (amount: number) => {
    setInvestmentAmount(amount);
  };

  const handleConfirmInvestment = async () => {
    try {
      const transaction = await confirmInvestmentTransaction({
        userId,
        walletId,
        projectId,
        amount: investmentAmount,
      });

      router.push(`/invest/${projectId}/confirmation/${transaction.transactionId}`);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un error al confirmar la inversión. Por favor, inténtalo de nuevo más tarde.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  return (
    <div className="space-y-6">
      {/* Monto de inversión */}
      <InvestmentAmount
        minInvestmentAmount={minInvestmentAmount}
        maxInvestmentAmount={maxInvestmentAmount}
        onInvestmentChange={handleInvestmentChange}
      />

      {/* Resumen de la inversión */}
      <div className="rounded-md border p-4">
        <h3 className="font-medium mb-3">Resumen de la inversión</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Monto a invertir:</span>
            <span className="text-sm font-medium">{currencyFormat(investmentAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Rendimiento estimado anual:</span>
            <span className="text-sm font-medium">{currencyFormat((investmentAmount * rentalYieldsAnnualCash) / 100)}</span>
          </div>
          <div className="border-t my-2"></div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Total después de 1 año:</span>
            <span className="text-sm font-medium">
              {currencyFormat(investmentAmount + (investmentAmount * rentalYieldsAnnualCash) / 100)}
            </span>
          </div>
        </div>
      </div>

      <Button className="w-full" size="lg" onClick={handleConfirmInvestment}>
        Confirmar Inversión
      </Button>
    </div>
  );
}
