import { useGetCollectionsMoviesQuery } from '@/shared/api/endpoints';
import type { CollectionMovieType } from '@/shared/api/types';
import type { PaginationProps } from 'antd';
import { useState } from 'react';

export const useSelectionMovies = (type: CollectionMovieType) => {
  const [page, setPage] = useState(1);
  const { data: selectionMovies, isFetching } = useGetCollectionsMoviesQuery({
    page,
    type,
  });

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { page, selectionMovies, isFetching, onChangePage };
};
