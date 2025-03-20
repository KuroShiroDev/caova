import { getInvestmentsByProjectId } from '@/actions/investments';
import { InvestmentWithUser } from '@/interfaces/investment.interface';
import { useEffect, useState } from 'react';

interface Props {
  projectId: number;
}

const useGetInvestmentsByProject = ({ projectId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [investments, setInvestments] = useState<InvestmentWithUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getInvestmentsByProjectId({ projectId: projectId });
        setInvestments(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [projectId]);
  return { isLoading, investments };
};

export default useGetInvestmentsByProject;
