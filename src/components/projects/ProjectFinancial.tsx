import { currencyFormat, calculateProgressPercentage } from '@/lib/utils';
import { Progress } from '@radix-ui/react-progress';
import { PieChartIcon, TrendingUpIcon, FileTextIcon } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { IProject, ProjectDocument } from '@/interfaces/project.interface';

interface ProjectFinancialProps {
  projectData: IProject;
}

export default function ProjectFinancial({ projectData }: ProjectFinancialProps) {
  const totalCosts = Number(
    Number(projectData.accountServicesCost ?? 0) +
      Number(projectData.basicEquipmentAndTestingCost ?? 0) +
      Number(projectData.cetificatesSNandRCost ?? 0) +
      Number(projectData.companiesIncorporationCost ?? 0) +
      Number(projectData.contigenciesFee ?? 0) +
      Number(projectData.finishingCost ?? 0) +
      Number(projectData.legalCost ?? 0) +
      Number(projectData.propertyAppraisal ?? 0) +
      Number(projectData.searchAndAdvertisingFee ?? 0) +
      Number(projectData.studyTitleCost ?? 0) +
      Number(projectData.totalPropertyCost ?? 0) +
      Number(projectData.transactionCost ?? 0)
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChartIcon className="h-5 w-5" />
            Desglose de Costos
          </CardTitle>
          <CardDescription>Detalle de todos los costos asociados al proyecto</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">Costo Total</p>
              <p className="text-xl font-bold">{currencyFormat(totalCosts)}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Costo Total de la Propiedad</p>
                <p className="font-medium">{currencyFormat(Number(projectData.totalPropertyCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Costo de Acabados</p>
                <p className="font-medium">{currencyFormat(Number(projectData.finishingCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Equipamiento Básico y Pruebas</p>
                <p className="font-medium">{currencyFormat(Number(projectData.basicEquipmentAndTestingCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Costos Legales</p>
                <p className="font-medium">{currencyFormat(Number(projectData.legalCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Avalúo de la Propiedad</p>
                <p className="font-medium">{currencyFormat(Number(projectData.propertyAppraisal))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Estudio de Título</p>
                <p className="font-medium">{currencyFormat(Number(projectData.studyTitleCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Certificados SN y R</p>
                <p className="font-medium">{currencyFormat(Number(projectData.cetificatesSNandRCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Costo de Transacción</p>
                <p className="font-medium">{currencyFormat(Number(projectData.transactionCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Servicios de Cuenta</p>
                <p className="font-medium">{currencyFormat(Number(projectData.accountServicesCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Incorporación de Empresas</p>
                <p className="font-medium">{currencyFormat(Number(projectData.companiesIncorporationCost))}</p>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <p className="text-sm">Búsqueda y Publicidad</p>
                <p className="font-medium">{currencyFormat(Number(projectData.searchAndAdvertisingFee))}</p>
              </div>
              <div className="flex justify-between items-center p-2">
                <p className="text-sm">Tarifa de Contingencias</p>
                <p className="font-medium">{currencyFormat(Number(projectData.contigenciesFee))}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUpIcon className="h-5 w-5" />
            Valor del Proyecto
          </CardTitle>
          <CardDescription>Información sobre el valor y progreso del proyecto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <h3 className="font-medium">Progreso del Proyecto</h3>
              <span className="font-semibold text-primary">
                {calculateProgressPercentage(
                  projectData.projectValueActual ?? BigInt(0),
                  BigInt(projectData.projectValueTotal ?? 0)
                )}
                %
              </span>
            </div>
            <Progress
              value={calculateProgressPercentage(
                projectData.projectValueActual ?? BigInt(0),
                BigInt(projectData.projectValueTotal ?? 0)
              )}
              className="h-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">Valor Total del Proyecto</p>
              <p className="text-xl font-bold">{currencyFormat(Number(projectData.projectValueTotal))}</p>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Valor Actual del Proyecto</p>
              <p className="text-xl font-bold">
                {projectData.projectValueActual ? currencyFormat(Number(projectData.projectValueActual)) : 'No disponible'}
              </p>
            </div>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Inversión Mínima</p>
            <p className="text-lg font-semibold">{currencyFormat(projectData.minInvestmentAmount)}</p>
          </div>

          {projectData.documents && (
            <div>
              <h3 className="text-sm font-medium mb-3">Documentos del Proyecto</h3>
              <div className="space-y-2">
                {Array.isArray(projectData.documents) &&
                  (projectData.documents as unknown as ProjectDocument[]).map((doc, index) => (
                    <div key={index} className="flex items-center p-2 bg-muted/30 rounded-lg">
                      <FileTextIcon className="mr-2 h-4 w-4 text-primary" />
                      <a href={doc.url} className="text-primary hover:underline">
                        {doc.name}
                      </a>
                    </div>
                  ))}
                {(!Array.isArray(projectData.documents) || projectData.documents.length === 0) && (
                  <p className="text-muted-foreground">No hay documentos disponibles.</p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
