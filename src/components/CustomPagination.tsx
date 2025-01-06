'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { generateLink } from '@/lib/utils';
import { EntityType, useFilterStore } from '@/store';
import { usePathname, useSearchParams } from 'next/navigation';

interface Props {
  total?: number;
  pageSize?: number;
  entity?: EntityType;
}

const CustomPagination = ({ total = 0, pageSize = 1, entity = 'projects' }: Props) => {
  // get the page actual link to generate the dynamic links and use in the paginationLink components using next
  const filters = useFilterStore((state) => state.filters);
  const entityFilters = filters[entity];
  const currentLink = usePathname();
  const params = useSearchParams();
  const actualPage = params.get('page') ? parseInt(params.get('page') || '') : 1;

  const getNewLink = (page: number) => {
    let link = generateLink(currentLink, {
      ...entityFilters.filters,
      page: page,
    });
    return link;
  };

  const pageCount = Math.ceil(total / pageSize);
  const maxVisbilePages = 5;

  if (pageCount < 2) return null;

  const getVisiblePages = () => {
    let start = Math.max(1, actualPage - Math.floor(maxVisbilePages / 2));
    const end = Math.min(pageCount, start + maxVisbilePages - 1);

    if (end - start < maxVisbilePages - 1) {
      start = Math.max(1, end - maxVisbilePages + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getNewLink(actualPage - 1)}
            className={actualPage <= 1 ? 'ponters-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {visiblePages[0] > 1 && (
          <PaginationItem>
            <PaginationLink href={getNewLink(1)} isActive={1 === actualPage}>
              1
            </PaginationLink>
          </PaginationItem>
        )}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={getNewLink(page)} isActive={page === actualPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {visiblePages[visiblePages.length - 1] < pageCount && (
          <>
            {visiblePages[visiblePages.length - 1] < pageCount - 1 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink href={getNewLink(pageCount)}>{pageCount}</PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href={getNewLink(actualPage + 1)}
            className={actualPage >= pageCount ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
