import type { FiltersItem } from '@/entities/movie/types';
import { useGetFiltersQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import { changeFilter } from '../model';
import type { FiltersState } from '../model/filters-types';

export const useFilters = (movieType: keyof FiltersState) => {
  const dispatch = useAppDispatch();
  const { data: filters, isFetching } = useGetFiltersQuery({});
  const { countryId, genreId, year, order } = useAppSelector(
    (state) => state.filters[movieType]
  );

  const handleChange = (filter: keyof FiltersItem, value?: string | number) => {
    dispatch(changeFilter({ type: movieType, filter, value }));
  };

  return { filters, isFetching, countryId, genreId, year, order, handleChange };
};
