'use client';
import CustomPagination from '@/components/CustomPagination';
import useGetInvestments from '@/hooks/investment/useGetInvestments';
import PageLoader from '@/components/ui/PageLoader';
import InvestmentsTable from './(components)/InvestmentsTable';

export default function AdminInvestmentsPage() {
  const { investments, isLoading } = useGetInvestments();
  if (isLoading) {
    return <PageLoader />;
  }
  console.log(investments?.investments[0]);
  return (
    <div className="min-h-content">
      <InvestmentsTable investments={investments?.investments || []} />
      <CustomPagination total={investments?.total || 0} />
    </div>
  );
}
