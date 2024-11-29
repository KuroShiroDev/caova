import { getInvestments } from '@/actions/investments';
import { GetAdminInvestments } from '@/interfaces/investment.interface';
import { Investement } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Investments {
  total: number;
  investments: GetAdminInvestments[];
}

const useGetInvestments = () => {
  const params = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [investments, setInvestments] = useState<Investments>();
  const actualPage = params.get('page') ? parseInt(params.get('page') || '') : 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInvestments({ page: actualPage, limit: 10 });
        setInvestments({ total: data.total, investments: data.investments });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [actualPage]);

  return { investments, isLoading };
};

export default useGetInvestments;
