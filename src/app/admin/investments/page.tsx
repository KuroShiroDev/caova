'use client';
import CustomPagination from '@/components/CustomPagination';
import useGetInvestments from '@/hooks/investment/useGetInvestments';
import PageLoader from '@/components/ui/PageLoader';
import InvestmentsTable from './(components)/InvestmentsTable';
import InvestmentFilters from './(components)/InvestmentsFilters';

export default function AdminInvestmentsPage() {
  const { investments, isLoading } = useGetInvestments();
  if (isLoading) {
    return <PageLoader />;
  }

  console.log('Loading');
  return (
    <div className="min-h-content">
      <InvestmentFilters />
      <InvestmentsTable investments={investments?.investments || []} />
      <CustomPagination total={investments?.total || 0} pageSize={5} />
    </div>
  );
}
