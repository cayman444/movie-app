import { useGetMoviesQuery } from '@/shared/api/endpoints';
import type { PaginationProps } from 'antd';
import { useState } from 'react';

export const useMovies = () => {
  const [page, setPage] = useState(1);
  const { data: movies, isFetching } = useGetMoviesQuery({ page });

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { page, movies, isFetching, onChangePage };
};
