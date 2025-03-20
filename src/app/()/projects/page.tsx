import { getProjects } from '@/actions/projects';
import { ProjectsInfoCard } from '@/components/projects/ProjectsInfoCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { Separator } from '@radix-ui/react-separator';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <MaxWidthWrapper>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h1 className="text-3xl font-bold tracking-tight text-center md:text-left">Proyectos Disponibles</h1>
          <div className="flex items-center gap-2">
            <Input type="text" placeholder="Buscar proyectos..." className="w-full md:w-auto" />
            <Button variant="default">Buscar</Button>
          </div>
        </div>

        <Separator />
        <ProjectsInfoCard basePath="projects" projects={projects} />
      </div>
    </MaxWidthWrapper>
  );
}
