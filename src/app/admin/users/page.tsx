import CustomPagination from '@/components/CustomPagination';
import UserFilters from './(components)/UserFilters';
import UsersTable from './(components)/UsersTable';

export default function AdminUsersPage() {
  return (
    <div className="flex flex-col gap-8">
      <UserFilters />
      <UsersTable />
      <CustomPagination />
    </div>
  );
}
