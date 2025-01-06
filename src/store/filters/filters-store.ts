import { create } from 'zustand';

export type EntityType = 'projects' | 'investments' | 'users';

interface FilterState {
  activeEntity: EntityType | null;
  filters: Record<
    EntityType,
    {
      filters: Record<string, any>;
      pagination: {
        page: number;
        pageSize: number;
      };
    }
  >;
  setEntityFilters: (entity: EntityType, filters: Record<string, any>) => void;
  setEntityPagination: (entity: EntityType, page: number, pageSize: number) => void;
  setActiveEntity: (entity: EntityType) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  activeEntity: null,
  filters: {
    projects: {
      filters: {},
      pagination: { page: 1, pageSize: 10 },
    },
    users: {
      filters: {},
      pagination: { page: 1, pageSize: 10 },
    },
    investments: {
      filters: {},
      pagination: { page: 1, pageSize: 10 },
    },
  },
  setEntityFilters: (entity, filters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [entity]: {
          ...state.filters[entity],
          filters,
        },
      },
    })),
  setEntityPagination: (entity, page, pageSize) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [entity]: {
          ...state.filters[entity],
          pagination: {
            page,
            pageSize,
          },
        },
      },
    })),
  setActiveEntity: (entity) => set({ activeEntity: entity }),
}));
