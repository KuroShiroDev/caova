import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useManageFilters } from '@/hooks/generic';
import { generateLink } from '@/lib/utils';

const useAdminUserFilters = () => {
  const router = useRouter();
  const seachParams = useSearchParams();
  const search = seachParams.get('search') || '';

  const { filters, setEntityfilters } = useManageFilters({ entity: 'users' });

  useEffect(() => {
    setEntityfilters('users', {
      search,
    });
  }, [search]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityfilters('users', {
      search: e.target.value,
    });
  };

  const handleSearch = (): void => {
    const activeFilters = { ...filters.users.filters };
    const url = generateLink('/admin/users', activeFilters);
    router.push(url);
  };
  return { handleChangeSearch, handleSearch };
};

export default useAdminUserFilters;
