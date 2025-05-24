import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { ProjectDetails } from '../../../../../components/projects/ProjectDeatils';
import { Card } from '@/components/ui/card';
import { getProjectByUser } from '@/actions/projects';

interface ProductUserDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductUserDetailPage({ params }: ProductUserDetailPageProps) {
  const projectData = await getProjectByUser(params.id);

  return (
    <MaxWidthWrapper className=" flex flex-col gap-4 items-center">
      <Card className="w-full shadow-lg">
        <ProjectDetails projectData={projectData} />
      </Card>
    </MaxWidthWrapper>
  );
}
