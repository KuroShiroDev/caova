import { BuildingIcon, BedIcon, ShowerHeadIcon, SquareIcon, MapPinIcon, TagIcon, CheckCircleIcon, ImageIcon } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { getPropertyTypeDisplay } from './lib/utils';
import { Badge } from '@/components/ui/badge';
import { Project } from '@prisma/client';
import Image from 'next/image';

interface ProjectPropertyProps {
  projectData: Project;
}

export const ProjectProperty = ({ projectData }: ProjectPropertyProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BuildingIcon className="h-5 w-5" />
            Características de la Propiedad
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
              <BedIcon className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Habitaciones</p>
              <p className="text-xl font-bold">{projectData.bedrooms}</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
              <ShowerHeadIcon className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Baños</p>
              <p className="text-xl font-bold">{projectData.bathrooms}</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
              <SquareIcon className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Área</p>
              <p className="text-xl font-bold">{projectData.squareMeters} m²</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Tipo de Propiedad</h3>
            <Badge className="text-sm">{getPropertyTypeDisplay(projectData.propertyType)}</Badge>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Ubicación</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <p>{projectData.address}</p>
              </div>
              <div className="flex items-center">
                <TagIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <p>
                  {projectData.city}, {projectData.department}, {projectData.country}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TagIcon className="h-5 w-5" />
            Áreas Comunes
          </CardTitle>
        </CardHeader>
        <CardContent>
          {projectData.commonAreas && projectData.commonAreas.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {projectData.commonAreas.map((area, index) => (
                <div key={index} className="flex items-center p-3 bg-muted/30 rounded-lg">
                  <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                  <span>{area.trim()}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No hay áreas comunes registradas.</p>
          )}
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Galería
          </CardTitle>
        </CardHeader>
        <CardContent>
          {projectData.media && projectData.media.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectData.media.map((img, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={img || '/placeholder.svg'}
                    alt={`${projectData.title} - imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No hay imágenes disponibles.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
