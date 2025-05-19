'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import { currencyFormat } from '@/lib/utils';
import { formatNumberWithDots } from '../../../../lib/utils';
import { CURRENCY } from '@/config/currency';

interface InvestmentAmountProps {
  minInvestmentAmount: number;
  maxInvestmentAmount: number;
  onInvestmentChange: (amount: number) => void;
}

export default function InvestmentAmount({
  minInvestmentAmount,
  maxInvestmentAmount,
  onInvestmentChange,
}: InvestmentAmountProps) {
  const [investmentAmount, setInvestmentAmount] = useState<string>(formatNumberWithDots(minInvestmentAmount));

  const handleInvestmentChange = (value: string) => {
    const numericValue = parseInt(value.replace(/\./g, ''), 10) || 0;
    setInvestmentAmount(formatNumberWithDots(numericValue));
    onInvestmentChange(numericValue);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Monto de inversión</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">
                La inversión mínima para este proyecto es de {currencyFormat(minInvestmentAmount)} {CURRENCY}.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="monto">Monto ({CURRENCY})</Label>
          <span className="text-sm text-muted-foreground">Mínimo: {currencyFormat(minInvestmentAmount)}</span>
        </div>
        <Input id="monto" type="text" value={investmentAmount} onChange={(e) => handleInvestmentChange(e.target.value)} />
        <Slider
          defaultValue={[parseInt(investmentAmount.replace(/\./g, ''), 10)]}
          max={maxInvestmentAmount}
          min={minInvestmentAmount}
          step={10}
          value={[parseInt(investmentAmount.replace(/\./g, ''), 10)]}
          onValueChange={(value) => handleInvestmentChange(formatNumberWithDots(value[0]))}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{currencyFormat(minInvestmentAmount)}</span>
          <span>{currencyFormat(maxInvestmentAmount)}</span>
        </div>
      </div>
    </div>
  );
}
