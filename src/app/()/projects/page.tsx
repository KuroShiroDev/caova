'use client';

import CustomPagination from '@/components/CustomPagination';
import { ProjectsInfoCard } from '@/components/projects/ProjectsInfoCard';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import PageLoader from '@/components/ui/PageLoader';
import { Separator } from '@/components/ui/separator';
import useGetProjects from '@/hooks/project/useGetProjects';

export default function ProjectsPage() {
  const { projects, isLoading } = useGetProjects(6);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <MaxWidthWrapper>
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h1 className="text-3xl font-bold tracking-tight text-center md:text-left">Proyectos Disponibles</h1>
        </div>

        <Separator />

        {projects && <ProjectsInfoCard projects={projects?.projects} />}
        <CustomPagination total={projects?.total} pageSize={6} />
      </div>
    </MaxWidthWrapper>
  );
}
