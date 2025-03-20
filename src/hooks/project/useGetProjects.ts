import { getProjects } from '@/actions/projects';
import { ProjectWithInvestmentsAndUsers } from '@/interfaces/project.interface';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

interface Projects {
  total: number;
  projects: ProjectWithInvestmentsAndUsers[];
}

const useGetProjects = (limit = 5) => {
  const params = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Projects>();
  const actualPage = params.get('page') ? parseInt(params.get('page') || '') : 1;
  const search = params.get('search') || '';

  const filters = useMemo(() => {
    return {
      search,
    };
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjects({ page: actualPage, limit, filters });
        setProjects({ total: data.total, projects: data.projects });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [actualPage, search, filters, limit]);

  return { projects, setProjects, isLoading };
};

export default useGetProjects;
