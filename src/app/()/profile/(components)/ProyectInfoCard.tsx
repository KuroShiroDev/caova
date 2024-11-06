import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { currencyFormat } from '@/lib/utils';
import { MapPinIcon, DollarSignIcon, CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const ProyectInfoCard = () => {
  const project = {
    projectId: 'PROJ001',
    title: 'Desarrollo Residencial Sunset',
    address: '123 Calle Principal, Ciudad Ejemplo',
    description: 'Complejo residencial de lujo con vistas al mar y amenidades de primera clase.',
    projectValueTotal: BigInt(10000000),
    projectValueActual: BigInt(7500000),
    createdAt: new Date('2023-01-15'),
    startIncomeDate: new Date('2023-06-01'),
    endIncomeDate: new Date('2028-05-31'),
    media: ['image1.jpg', 'image2.jpg'],
    documents: ['doc1.pdf', 'doc2.pdf'],
  };

  const progressPercentage = Number((project.projectValueActual * BigInt(100)) / project.projectValueTotal);

  return (
    <Card className="w-full max-w-md  ">
      <div className="relative w-full h-[200px]">
        <Image
          className=" rounded-t-lg"
          src="/real-state.avif"
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
            <span className=" text-muted-foreground">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="w-full" />
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
          Periodo: {project.startIncomeDate.toLocaleDateString()} -{' '}
          {project.endIncomeDate.toLocaleDateString()}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" size="sm">
          Ver Detalles
        </Button>
      </CardFooter>
    </Card>
  );
};
