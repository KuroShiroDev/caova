import { currencyFormat } from '@/lib/utils';
import { CircleDollarSignIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { getStatusVariant } from './lib/utils';
import { IProject } from '@/interfaces/project.interface';
import { Badge } from '../ui/badge';

interface ProjectInvestmentProps {
  projectData: IProject;
  annualReturn: number;
  roi: number;
}

export const ProjectInvestment = ({ projectData, annualReturn, roi }: ProjectInvestmentProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircleDollarSignIcon className="h-5 w-5" />
            Tu Inversión
          </CardTitle>
          <CardDescription>Detalles de tu inversión en este proyecto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">Monto Total Invertido</p>
            <p className="text-2xl font-bold">{currencyFormat(projectData.totalInvestmentAmount!)}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {((projectData.totalInvestmentAmount! / Number(projectData.projectValueTotal)) * 100).toFixed(2)}% del proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Estado de la Inversión</p>
                  <div className="flex items-center mt-1">
                    {projectData.status === 'activo' ? (
                      <>
                        <CheckCircleIcon className="mr-2 h-5 w-5 text-green-500" />
                        <p className="font-medium">Activa</p>
                      </>
                    ) : (
                      <>
                        <XCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                        <p className="font-medium">Inactiva</p>
                      </>
                    )}
                  </div>
                </div>
                <Badge variant={getStatusVariant(projectData.status)} className="text-sm">
                  {projectData.status === 'activo' ? 'Activo' : 'Inactivo'}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Rendimiento Anual</p>
                <p className="text-lg font-semibold">{currencyFormat(projectData.rentalYieldsAnnualCash ?? 0)}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Valorización Anual</p>
                <p className="text-lg font-semibold">{currencyFormat(projectData.incomeFromValuationAnnualCash ?? 0)}</p>
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Retorno Total Anual Estimado</p>
              <p className="text-lg font-semibold">{currencyFormat(annualReturn)}</p>
              <p className="text-sm text-muted-foreground mt-1">ROI: {roi.toFixed(2)}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5" />
            Periodo de Inversión
          </CardTitle>
          <CardDescription>Fechas importantes relacionadas con tu inversión</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Fecha de Inicio de Ingresos</p>
              <p className="text-lg font-semibold">
                {projectData.startIncomeDate ? projectData.startIncomeDate.toLocaleDateString() : 'No disponible'}
              </p>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Fecha de Fin de Ingresos</p>
              <p className="text-lg font-semibold">
                {projectData.endIncomeDate ? projectData.endIncomeDate.toLocaleDateString() : 'No disponible'}
              </p>
            </div>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Duración del Periodo</p>
            {projectData.startIncomeDate && projectData.endIncomeDate ? (
              <p className="text-lg font-semibold">
                {Math.ceil((projectData.endIncomeDate.getTime() - projectData.startIncomeDate.getTime()) / (1000 * 60 * 60 * 24))}{' '}
                días
              </p>
            ) : (
              <p className="text-muted-foreground">No disponible</p>
            )}
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Fechas del Proyecto</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm">Fecha de Creación:</p>
                <p className="font-medium">{projectData.createdAt.toLocaleDateString()}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">Última Actualización:</p>
                <p className="font-medium">{projectData.updatedAt.toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
