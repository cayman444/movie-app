import { useGetMoviesQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import type { PaginationProps } from 'antd';
import { changeFilter } from '../model';

export const useMovies = () => {
  const dispatch = useAppDispatch();
  const { countryId, year, order, type, page } = useAppSelector(
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
    dispatch(changeFilter({ filter: 'page', type: 'movies', value: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { page, movies, isFetching, onChangePage };
};
