import CustomPagination from '@/components/CustomPagination';
import ProjectsTable from './(components)/ProjectsTable';
import ProjectFilters from './(components)/ProjectFilters';
import { getProjects } from '@/actions/projects';

export default async function AdminProjectsPage() {
  const { projects, total } = await getProjects({});
  return (
    <div>
      <div className="flex flex-col gap-8">
        <ProjectFilters />
        <ProjectsTable projects={projects} />
        <CustomPagination total={total} />
      </div>
    </div>
  );
}
