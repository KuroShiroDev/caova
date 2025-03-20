import React from 'react';
import { useEffect } from 'react';
import { generateLink } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import useManageFilters from '../generic/useManageFilters';

const useAdminProjectFilters = () => {
  const router = useRouter();
  const seachParams = useSearchParams();
  const search = seachParams.get('search') || '';

  const { filters, setEntityfilters } = useManageFilters({ entity: 'projects' });

  useEffect(() => {
    setEntityfilters('projects', {
      search,
    });
  }, [search]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityfilters('projects', {
      search: e.target.value,
    });
  };

  const handleSearch = (): void => {
    const activeFilters = { ...filters.projects.filters };
    const url = generateLink('/admin/projects', activeFilters);
    router.push(url);
  };
  return { handleChangeSearch, handleSearch, filters };
};

export default useAdminProjectFilters;
