// import { useSearchParams } from 'next/navigation';
// import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

// interface Props {
//   defaultFilters: Record<string, any>;
//   setFilters: Dispatch<SetStateAction<Record<string, any>>>;
//   filters: Record<string, any>;
//   exclude?: string[];
// }

// const useHandleFilters = ({ defaultFilters, setFilters, filters, exclude }: Props) => {
//   const searchParams = useSearchParams();
//   const [areFiltersLoaded, setAreFiltersLoaded] = useState(false);
//   const initializeFilters = useCallback(
//     (defaultFilters: Record<string, any>) => {
//       return Object.keys(defaultFilters).reduce(
//         (acc, key) => ({
//           ...acc,
//           [key]: searchParams.get(key) || defaultFilters[key],
//         }),
//         {}
//       );
//     },
//     [searchParams]
//   );

//   useEffect(() => {
//     setFilters(initializeFilters(defaultFilters));
//     setAreFiltersLoaded(true);
//   }, [searchParams, defaultFilters, initializeFilters, setFilters]);

//   let selectedFilters = filters;

//   if (exclude) {
//     selectedFilters = Object.entries(filters)
//       .filter(([key]) => !exclude.includes(key))
//       .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
//   }

//   const handleFilter = (activeFilters: Record<string, string>) => {
//     const hasActiveFiltes = Object.values(filters).some((value) => value !== '');
//     if (!hasActiveFiltes) {
//       return;
//     }
//     const queryParams = Object.entries(activeFilters)
//       .filter(([_, value]) => value !== '')
//       .map(([key, value]) => `${key}=${value}`)
//       .join('&');

//     return `?${queryParams}`;
//   };

//   const activeFilters = handleFilter(selectedFilters);

//   return { activeFilters, areFiltersLoaded };
// };

// export default useHandleFilters;
