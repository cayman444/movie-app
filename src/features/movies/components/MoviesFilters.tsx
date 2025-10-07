import { useGetFiltersQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { changeFilter } from '../model';
import { MovieSelect } from '../ui';
import {
  getCountryOptions,
  getGenreOptions,
  getOrderOptions,
  getYearsOptions,
} from '../utils';

export const MoviesFilters: FC<ComponentProps<'div'>> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { data: filters, isFetching } = useGetFiltersQuery({});
  const { countryId, genreId, year, order } = useAppSelector(
    (state) => state.filters.movies
  );

  const handleChangeCountry = (value?: number) => {
    dispatch(changeFilter({ type: 'movies', filter: 'countryId', value }));
  };

  const handleChangeGenre = (value?: number) => {
    dispatch(changeFilter({ type: 'movies', filter: 'genreId', value }));
  };

  const handleChangeYear = (value?: number) => {
    dispatch(changeFilter({ type: 'movies', filter: 'year', value }));
  };

  const handleChangeOrder = (value?: string) => {
    dispatch(changeFilter({ type: 'movies', filter: 'order', value }));
  };

  return (
    <div className={clsx(className, 'flex gap-2')}>
      <MovieSelect
        options={getOrderOptions()}
        defaultValue={order}
        placeholder="Сортировка"
        isFetching={isFetching}
        onChange={handleChangeOrder}
      />
      <MovieSelect
        options={getCountryOptions(filters)}
        defaultValue={countryId}
        placeholder="Страна"
        isFetching={isFetching}
        onChange={handleChangeCountry}
      />
      <MovieSelect
        options={getGenreOptions(filters)}
        defaultValue={genreId}
        placeholder="Жанр"
        isFetching={isFetching}
        onChange={handleChangeGenre}
      />
      <MovieSelect
        options={getYearsOptions()}
        defaultValue={year}
        placeholder="Год"
        isFetching={isFetching}
        onChange={handleChangeYear}
      />
    </div>
  );
};
