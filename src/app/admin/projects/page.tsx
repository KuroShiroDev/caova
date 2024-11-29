'use client';
import CustomPagination from '@/components/CustomPagination';
import useGetProjects from '@/hooks/project/useGetProjects';
import PageLoader from '@/components/ui/PageLoader';
import ProjectFilters from './(components)/ProjectFilters';
import ProjectsTable from './(components)/ProjectsTable';
import { useState } from 'react';
import useHandleFilters from '@/hooks/generic/useHandleFilters';

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
        <CustomPagination total={projects?.total} pageSize={5} />
      </div>
    </div>
  );
};

export default AdminProjectsPage;
