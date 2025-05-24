'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { ArrowLeft, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function RechargeWalletPage() {
  const [monto, setMonto] = useState('100000');
  const router = useRouter();

  const montoOptions = [
    { value: '100000', label: '$ 100.000' },
    { value: '500000', label: '$ 500.000' },
    { value: '1000000', label: '$ 1.000.000' },
    { value: '5000000', label: '$ 5.000.000' },
    { value: '10000000', label: '$ 10.000.000' },
  ];

  const handleContinuar = () => {
    const reference = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
    router.push(`/profile/recharge/confirm?monto=${monto}&reference=${reference}`);
  };

  return (
    <MaxWidthWrapper className=" md:w-[600px] lg:w-[800px] xl:w-[1000px]">
      <div className="mb-6">
        <Link href="/profile" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Perfil
        </Link>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Recargar Saldo</h1>
        <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-md">
          <Wallet className="h-5 w-5 mr-2" />
          <span className="font-medium">Saldo actual: COP 9.305.917.990</span>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>¿Cuánto deseas recargar?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {montoOptions.map((option) => (
              <Button
                key={option.value}
                type="button"
                variant={monto === option.value ? 'default' : 'outline'}
                className="h-16"
                onClick={() => setMonto(option.value)}>
                {option.label}
              </Button>
            ))}
          </div>
          <div className="space-y-2 mt-4">
            <Input
              type="number"
              min="10000"
              step="10000"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="text-lg"
              placeholder="Monto personalizado"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleContinuar} className="w-full">
            Continuar
          </Button>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}
