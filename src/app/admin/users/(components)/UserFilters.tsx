import { Input } from '@/components/ui/input';
import CustomSelect from '@/components/ui/CustomSelect';
import { Button } from '@/components/ui/button';
import { statusFilterOptions } from '../(data)/data';
import useAdminUserFilters from '@/hooks/user/useAdminUserFilters';

const UserFilters = () => {
  const { handleChangeSearch, handleSearch } = useAdminUserFilters();

  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between mb-5">
      <div className="flex justify-between items-end gap-2">
        <Input type="text" onChange={handleChangeSearch} placeholder="Buscar por ID o Correo" />
        <Button type="button" onClick={handleSearch}>
          Buscar
        </Button>
      </div>
      <CustomSelect label="Status" options={statusFilterOptions} placeHolder="Todos" />
    </div>
  );
};

export default UserFilters;
