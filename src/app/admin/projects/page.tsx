import CustomPagination from '@/components/CustomPagination';
import ProjectsTable from './(components)/ProjectsTable';
import ProjectFilters from './(components)/ProjectFilters';

export default function AdminProjectsPage() {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <ProjectFilters />
        <ProjectsTable />
        <CustomPagination />
      </div>
    </div>
  );
}
