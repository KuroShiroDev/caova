import { EntityType, useFilterStore } from '@/store';
import { useCallback, useEffect } from 'react';

interface Props {
  entity: EntityType;
}

const useManageFilters = ({ entity }: Props) => {
  const setEntityfilters = useFilterStore((state) => state.setEntityFilters);
  const setActiveEntity = useFilterStore((state) => state.setActiveEntity);
  const filters = useFilterStore((state) => state.filters);

  const setEntity = useCallback((entity: EntityType) => {
    setActiveEntity(entity);
  }, []);

  useEffect(() => {
    setEntity(entity);
  }, []);
  return { filters, setEntityfilters };
};

export default useManageFilters;
