'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useAdminInvestmentFilters from '@/hooks/investment/useAdminInvestmentFilters';

const InvestmentFilters = () => {
  const { handleChangeSearch, handleSearch, filters } = useAdminInvestmentFilters();
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between mb-5">
      <div className="flex justify-between items-end gap-2">
        <Input
          type="text"
          placeholder="Buscar por Titulo o Dirección del proyecto"
          onChange={handleChangeSearch}
          value={filters.investments.filters?.search ?? ''}
        />
        <Button
          type="button"
          onClick={() => {
            handleSearch();
          }}>
          Buscar
        </Button>
      </div>
    </div>
  );
};
export default InvestmentFilters;
