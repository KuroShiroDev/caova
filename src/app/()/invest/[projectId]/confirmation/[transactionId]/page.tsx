import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { getTransactionById } from '@/actions/transactions';
import { currencyFormat } from '@/lib/utils';

export default async function ConfirmacionPage({ params }: { params: { transactionId: string } }) {
  const transaction = await getTransactionById(params.transactionId);

  return (
    <MaxWidthWrapper className="mx-auto max-w-xl">
      <Card className="text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">¡Inversión Exitosa!</CardTitle>
          <CardDescription>Has invertido correctamente en este proyecto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-muted p-4">
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Proyecto</p>
                <p className="font-medium">{transaction.investment?.project.title}</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Fecha</p>
                <p className="font-medium">{transaction.updatedAt.toLocaleDateString()}</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Monto Invertido</p>
                <p className="font-medium text-xl">{currencyFormat(Number(transaction.amount))}</p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Puedes ver el estado de tu inversión en la sección &quot;Mis Inversiones&quot;.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full" asChild>
            <Link href="/profile">Ver Mis Inversiones</Link>
          </Button>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}
