import { getUsers } from '@/actions/users';
import { User, Wallet } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

interface Users {
  total: number;
  users: (User & { Wallet: Wallet })[];
}

const useGetUsers = () => {
  const params = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<Users>();
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
        const data = await getUsers({ page: actualPage, limit: 10, filters });
        setUsers({ total: data.total, users: data.users });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [actualPage, filters]);

  return { users, isLoading };
};

export default useGetUsers;
