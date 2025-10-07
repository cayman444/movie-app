import { useGetMoviesQuery } from '@/shared/api/endpoints';
import { useAppSelector } from '@/shared/store/store-hooks';
import type { PaginationProps } from 'antd';
import { useState } from 'react';

export const useMovies = () => {
  const [page, setPage] = useState(1);
  const { countryId, year, order, type } = useAppSelector(
    (state) => state.filters.movies
  );

  const { data: movies, isFetching } = useGetMoviesQuery({
    page,
    countryId,
    year,
    order,
    type,
  });

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { page, movies, isFetching, onChangePage };
};
