import { getProjects } from '@/actions/projects';
import { Project } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

interface Projects {
  total: number;
  projects: Project[];
}

const useGetProjects = () => {
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
        const data = await getProjects({ page: actualPage, limit: 5, filters });
        setProjects({ total: data.total, projects: data.projects });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [actualPage, filters]);

  return { projects, setProjects, isLoading };
};

export default useGetProjects;
