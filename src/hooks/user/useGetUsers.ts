import { getProjects } from '@/actions/projects';
import { getUsers } from '@/actions/users';
import { Project, User } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Users {
  total: number;
  users: User[];
}

const useGetUsers = () => {
  const params = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<Users>();
  const actualPage = params.get('page') ? parseInt(params.get('page') || '') : 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers({ page: actualPage, limit: 10 });
        setUsers({ total: data.total, users: data.users });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [actualPage]);

  return { users, isLoading };
};

export default useGetUsers;
