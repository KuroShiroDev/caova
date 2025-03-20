import React, { useEffect } from 'react';
import { useManageFilters } from '../generic';
import { generateLink } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

const useAdminInvestmentFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  const { filters, setEntityfilters } = useManageFilters({ entity: 'investments' });

  useEffect(() => {
    setEntityfilters('investments', {
      search,
    });
  }, [search]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityfilters('investments', { search: e.target.value });
  };

  const handleSearch = (): void => {
    const activeFilters = { ...filters.investments.filters };
    const url = generateLink('/admin/investments', activeFilters);
    router.replace(url);
    if (window) {
      window.location.replace(url);
    }
  };
  return { handleChangeSearch, handleSearch, filters };
};

export default useAdminInvestmentFilters;
