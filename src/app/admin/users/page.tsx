'use client';
import CustomPagination from '@/components/CustomPagination';
import UserFilters from './(components)/UserFilters';
import UsersTable from './(components)/UsersTable';
import useGetUsers from '@/hooks/user/useGetUsers';
import PageLoader from '@/components/ui/PageLoader';

export default function AdminUsersPage() {
  const { users, isLoading } = useGetUsers();
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="flex flex-col gap-8">
      <UserFilters />
      <UsersTable users={users?.users || []} />
      <CustomPagination total={users?.total} pageSize={10} />
    </div>
  );
}
