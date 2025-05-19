import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Wallet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { getOneProjectBasic } from '@/actions/projects';
import { getUser } from '@/actions/auth';
import { currencyFormat } from '@/lib/utils';
import InvestmentForm from '../(components)/InvestmentForm';
import { CURRENCY } from '@/config/currency';

export default async function InvestPage({ params }: { params: { projectId: string } }) {
  const project = await getOneProjectBasic(parseInt(params.projectId));
  const user = await getUser();

  if (!user) {
    return <div>No se pudo obtener el usuario</div>;
  }

  const projectValueRemaining = Number(project.projectValueTotal ?? 0) - Number(project.projectValueActual ?? 0);

  const saldoDisponible = (await user?.Wallet?.balance) ?? 0;
  const maxInvestmentAmount = Math.min(projectValueRemaining, Number(saldoDisponible));

  return (
    <MaxWidthWrapper className="mx-auto max-w-xl">
      <div className="mb-6">
        <Link
          href={`/projects/${params.projectId}`}
          className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Proyecto
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Invertir en {project.title}</CardTitle>
          <CardDescription>Utiliza tus {CURRENCY} para invertir en este proyecto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-md bg-muted p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Saldo disponible</span>
              </div>
              <span className="text-lg font-semibold">{currencyFormat(Number(saldoDisponible), 0, 0, 'code')}</span>
            </div>
          </div>

          {/* Información del proyecto */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-md">
              <Image
                src={project.media[0]}
                width={300}
                height={200}
                alt="Imagen del proyecto"
                className="h-[150px] w-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">{project.title}</h3>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Inversión Mínima:</span>
                  <span className="text-sm font-medium">{currencyFormat(project.minInvestmentAmount)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rendimiento Anual:</span>
                  <span className="text-sm font-medium">{project.rentalYieldsAnnualCash}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de inversión */}
          <InvestmentForm
            minInvestmentAmount={project.minInvestmentAmount}
            maxInvestmentAmount={maxInvestmentAmount}
            rentalYieldsAnnualCash={project.rentalYieldsAnnualCash!}
            projectId={project.projectId}
            userId={user.userId}
            walletId={user.Wallet?.walletId ?? 0}
          />
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
}
