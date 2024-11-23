'use client';
import CustomPagination from '@/components/CustomPagination';
import useGetProjects from '@/hooks/project/useGetProjects';
import PageLoader from '@/components/ui/PageLoader';
import ProjectFilters from './(components)/ProjectFilters';
import ProjectsTable from './(components)/ProjectsTable';

const AdminProjectsPage = () => {
  const { projects, isLoading } = useGetProjects();
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div>
      <div className="flex flex-col gap-8">
        <ProjectFilters />
        <ProjectsTable projects={projects?.projects || []} />
        <CustomPagination total={projects?.total} />
      </div>
    </div>
  );
};

export default AdminProjectsPage;
