"use client"

import { currencyFormat, calculateProgressPercentage } from '@/lib/utils';
import { Progress } from '@radix-ui/react-progress';
import { MapPinIcon } from 'lucide-react';
import React, { useState } from 'react';
import { getStatusVariant, getPropertyTypeDisplay } from './lib/utils';
import { Badge } from '../ui/badge';
import { IProject } from '@/interfaces/project.interface';
import Image from 'next/image';

interface ProjectHeaderProps {
  projectData: IProject;
}

export const ProjectHeader = ({ projectData }: ProjectHeaderProps) => {
  const [activeImage, setActiveImage] = useState(projectData.media?.[0] || '/real-state.avif');

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="w-full md:w-2/3">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">{projectData.title}</h1>
          <Badge variant={getStatusVariant(projectData.status)} className="text-sm">
            {projectData.status === 'activo' ? 'Activo' : 'Inactivo'}
          </Badge>
        </div>

        <div className="flex items-center text-muted-foreground mb-4">
          <MapPinIcon className="mr-2 h-4 w-4" />
          <span>
            {projectData.address}, {projectData.city}, {projectData.department}, {projectData.country}
          </span>
        </div>

        <p className="text-muted-foreground mb-4">{projectData.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="flex flex-col p-4 bg-muted/30 rounded-lg">
            <span className="text-xs text-muted-foreground">ID del Proyecto</span>
            <span className="font-semibold">{projectData.projectId}</span>
          </div>
          <div className="flex flex-col p-4 bg-muted/30 rounded-lg">
            <span className="text-xs text-muted-foreground">Constructora</span>
            <span className="font-semibold">{projectData.builder}</span>
          </div>
          <div className="flex flex-col p-4 bg-muted/30 rounded-lg">
            <span className="text-xs text-muted-foreground">Tipo de Propiedad</span>
            <span className="font-semibold">{getPropertyTypeDisplay(projectData.propertyType)}</span>
          </div>
          <div className="flex flex-col p-4 bg-muted/30 rounded-lg">
            <span className="text-xs text-muted-foreground">Inversión Mínima</span>
            <span className="font-semibold">{currencyFormat(projectData.minInvestmentAmount)} COP</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
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

        <div className="flex flex-row gap-4 ">
          <div className="flex w-full flex-col p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <span className="text-xs text-muted-foreground">Valor Total del Proyecto</span>
            <span className="text-xl font-bold">{currencyFormat(Number(projectData.projectValueTotal))}</span>
          </div>
          {projectData.totalInvestmentAmount && (
            <div className="flex flex-col w-full p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <span className="text-xs text-muted-foreground">Tu Inversión</span>
              <span className="text-xl font-bold">{currencyFormat(projectData.totalInvestmentAmount)}</span>
              <span className="text-xs text-muted-foreground mt-1">
                {((projectData.totalInvestmentAmount / Number(projectData.projectValueTotal)) * 100).toFixed(2)}% del proyecto
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-3">
          <Image src={activeImage || '/placeholder.svg'} alt={projectData.title} fill className="object-cover" />
        </div>

        {projectData.media && projectData.media.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {projectData.media.map((img, index) => (
              <button
                key={index}
                className={`relative w-16 h-16 rounded-md overflow-hidden border-2 ${
                  activeImage === img ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setActiveImage(img)}>
                <Image
                  src={img || '/placeholder.svg'}
                  alt={`${projectData.title} - imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
