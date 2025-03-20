import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { calculateProgressPercentage, currencyFormat } from '@/lib/utils';
import { Project } from '@prisma/client';
import { MapPinIcon, DollarSignIcon, CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectInfoCardProps {
  projects: Project[];
  basePath?: string;
}

export const ProjectsInfoCard = ({ projects, basePath }: ProjectInfoCardProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.projectId} className="w-full max-w-md  ">
          <div className="relative w-full h-[200px]">
            <Image
              className=" rounded-t-lg"
              src={project.media[0] ? project.media[0] : '/real-state.avif'}
              alt="Imagen del Desarrollo Residencial Sunset"
              fill
            />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
              <Badge variant="outline">{project.projectId}</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center text-sm">
              <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
              {project.address}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <h3>Progreso</h3>
                <span className=" text-muted-foreground">
                  {calculateProgressPercentage(project.projectValueActual ?? BigInt(0), project.projectValueTotal ?? BigInt(0))}%
                </span>
              </div>
              <Progress
                value={calculateProgressPercentage(
                  project.projectValueActual ?? BigInt(0),
                  project.projectValueTotal ?? BigInt(0)
                )}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <DollarSignIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Total: {currencyFormat(Number(project.projectValueTotal))}</span>
              </div>
              <div className="flex items-center">
                <DollarSignIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Actual: {currencyFormat(Number(project.projectValueActual))} </span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
              Creado el {project.createdAt.toLocaleDateString()}
            </div>
            <div className="text-sm text-muted-foreground">
              Periodo: {(project.startIncomeDate ?? new Date()).toLocaleDateString()} -{' '}
              {(project.endIncomeDate ?? new Date()).toLocaleDateString()}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href={`${basePath ? `${basePath}/` : ''}projects/${project.projectId}`}>
              <Button variant="outline" size="sm">
                Ver Detalles
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
