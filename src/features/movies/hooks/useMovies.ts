import { useGetMoviesQuery } from '@/shared/api/endpoints';
import { useDebounce } from '@/shared/hooks';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import type { PaginationProps } from 'antd';
import { changeFilter } from '../model';
import type { FiltersState } from '../model/filters-types';

export const useMovies = (movieType: keyof FiltersState) => {
  const dispatch = useAppDispatch();
  const { countryId, genreId, year, order, type, page, search } =
    useAppSelector((state) => state.filters[movieType]);

  const debounceSearch = useDebounce(search, 300);

  const { data: movies, isFetching } = useGetMoviesQuery({
    page,
    countryId,
    genreId,
    year,
    order,
    type,
    search: debounceSearch,
  });

  const onChangePage: PaginationProps['onChange'] = (page) => {
    dispatch(changeFilter({ filter: 'page', type: movieType, value: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { page, movies, isFetching, onChangePage };
};
