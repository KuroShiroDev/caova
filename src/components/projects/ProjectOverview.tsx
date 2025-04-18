import { currencyFormat } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import { InfoIcon, MapPinIcon, LinkIcon, CircleDollarSignIcon } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { IProject } from '@/interfaces/project.interface';
import { getPropertyTypeDisplay, getStatusVariant } from './lib/utils';
import { Badge } from '../ui/badge';

interface ProjectOverviewProps {
  projectData: IProject;
  roi?: number;
}

export default function ProjectOverview({ projectData, roi }: ProjectOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <InfoIcon className="h-5 w-5" />
            Información General
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">ID del Proyecto</p>
              <p className="font-medium">{projectData.projectId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Estado</p>
              <Badge variant={getStatusVariant(projectData.status)}>
                {projectData.status === 'activo' ? 'Activo' : 'Inactivo'}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Constructora</p>
              <p className="font-medium">{projectData.builder}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tipo de Propiedad</p>
              <p className="font-medium">{getPropertyTypeDisplay(projectData.propertyType)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Creado</p>
              <p className="font-medium">{projectData.createdAt.toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Actualizado</p>
              <p className="font-medium">{projectData.updatedAt.toLocaleDateString()}</p>
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-sm text-muted-foreground mb-2">Ubicación</p>
            <div className="flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
              <p className="font-medium">
                {projectData.address}, {projectData.city}, {projectData.department}, {projectData.country}
              </p>
            </div>
          </div>

          {projectData.projectLinks && (
            <>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-2">Enlaces del Proyecto</p>
                <div className="flex items-center">
                  <LinkIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <a href={projectData.projectLinks} className="text-primary hover:underline font-medium">
                    {projectData.projectLinks}
                  </a>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircleDollarSignIcon className="h-5 w-5" />
            Resumen Financiero
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">Valor Total del Proyecto</p>
              <p className="text-xl font-bold">{currencyFormat(Number(projectData.projectValueTotal))}</p>
            </div>

            {projectData.totalInvestmentAmount && (
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Tu Inversión</p>
                <p className="text-xl font-bold">{currencyFormat(projectData.totalInvestmentAmount)}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {((projectData.totalInvestmentAmount / Number(projectData.projectValueTotal)) * 100).toFixed(2)}% del proyecto
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Rendimiento Anual</p>
                <p className="font-semibold">{currencyFormat(projectData.rentalYieldsAnnualCash ?? 0)}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Valorización Anual</p>
                <p className="font-semibold">{currencyFormat(projectData.incomeFromValuationAnnualCash ?? 0)}</p>
              </div>
            </div>

            {roi && (
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">ROI Anual Estimado</p>
                <p className="font-semibold">{roi.toFixed(2)}%</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
