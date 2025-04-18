import { getProjectById } from '@/actions/projects';
import { ProjectDetails } from '@/components/projects/ProjectDeatils';
import { Card } from '@/components/ui/card';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';

interface ProductPageProps {
  params: {
    id: number;
  };
}

export default async function ProjectPage({ params }: ProductPageProps) {
  const projectData = await getProjectById(params.id);

  return (
    <MaxWidthWrapper className=" flex flex-col gap-4 items-center">
      <Card className="w-full shadow-lg">
        <ProjectDetails projectData={projectData} />
      </Card>
    </MaxWidthWrapper>
  );
}
