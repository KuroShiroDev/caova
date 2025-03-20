import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IProject } from '@/interfaces/project.interface';
import { ArrowLeftIcon, BuildingIcon, LayoutDashboardIcon, PieChartIcon, TrendingUpIcon } from 'lucide-react';
import Link from 'next/link';
import ProjectOverview from './ProjectOverview';
import { ProjectProperty } from './ProjectProperty';
import ProjectFinancial from './ProjectFinancial';
import { ProjectInvestment } from './ProjectInvestment';
import { ProjectHeader } from './ProjectHeader';

interface ProjectDetailsProps {
  projectData: IProject;
}

export const ProjectDetails = ({ projectData }: ProjectDetailsProps) => {
  const annualReturn = (projectData.rentalYieldsAnnualCash ?? 0) + (projectData.incomeFromValuationAnnualCash ?? 0);
  const roi = (annualReturn / (projectData.totalInvestmentAmount ?? 1)) * 100;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/investments">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Volver a Inversiones
          </Link>
        </Button>
      </div>

      <ProjectHeader projectData={projectData} />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="flex  w-full mb-6">
          <TabsTrigger value="overview" className="flex w-full items-center gap-2">
            <LayoutDashboardIcon className="h-4 w-4" />
            <span className="hidden md:inline">Resumen</span>
          </TabsTrigger>
          <TabsTrigger value="property" className="flex w-full items-center gap-2">
            <BuildingIcon className="h-4 w-4" />
            <span className="hidden md:inline">Propiedad</span>
          </TabsTrigger>
          <TabsTrigger value="financial" className="flex w-full items-center gap-2">
            <PieChartIcon className="h-4 w-4" />
            <span className="hidden md:inline">Financiero</span>
          </TabsTrigger>
          {projectData.totalInvestmentAmount && (
            <TabsTrigger value="investment" className="flex w-full items-center gap-2">
              <TrendingUpIcon className="h-4 w-4" />
              <span className="hidden md:inline">Inversión</span>
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="overview">
          <ProjectOverview projectData={projectData} roi={roi} />
        </TabsContent>

        <TabsContent value="property">
          <ProjectProperty projectData={projectData} />
        </TabsContent>

        <TabsContent value="financial">
          <ProjectFinancial projectData={projectData} />
        </TabsContent>

        {projectData.totalInvestmentAmount && (
          <TabsContent value="investment">
            <ProjectInvestment projectData={projectData} annualReturn={annualReturn} roi={roi} />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};
