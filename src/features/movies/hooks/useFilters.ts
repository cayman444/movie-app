import type { FiltersItem } from '@/entities/movie/types';
import { useGetFiltersQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import { type ChangeEvent } from 'react';
import { changeFilter } from '../model';
import type { FiltersState } from '../model/filters-types';

export const useFilters = (movieType: keyof FiltersState) => {
  const dispatch = useAppDispatch();
  const { data: filters, isFetching } = useGetFiltersQuery({});
  const { countryId, genreId, year, order, search } = useAppSelector(
    (state) => state.filters[movieType]
  );

  const handleChangeSelect = (
    filter: keyof FiltersItem,
    value?: string | number
  ) => {
    dispatch(changeFilter({ type: movieType, filter, value }));
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeFilter({ type: movieType, filter: 'search', value: e.target.value })
    );

    dispatch(changeFilter({ type: movieType, filter: 'page', value: 1 }));
  };

  return {
    filters,
    isFetching,
    countryId,
    genreId,
    year,
    order,
    search,
    handleChangeSelect,
    handleChangeInput,
  };
};
