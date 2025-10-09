import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { useFilters } from '../hooks';
import type { FiltersState } from '../model/filters-types';
import { MovieSelect } from '../ui';
import {
  getCountryOptions,
  getGenreOptions,
  getOrderOptions,
  getYearsOptions,
} from '../utils';

interface MoviesFiltersProps extends ComponentProps<'div'> {
  movieType: keyof FiltersState;
}

export const MoviesFilters: FC<MoviesFiltersProps> = ({
  className,
  movieType,
}) => {
  const { filters, isFetching, countryId, genreId, order, year, handleChange } =
    useFilters(movieType);

  return (
    <div className={clsx(className, 'flex gap-2')}>
      <MovieSelect
        options={getOrderOptions()}
        defaultValue={order}
        placeholder="Сортировка"
        isFetching={isFetching}
        onChange={(value?: string) => handleChange('order', value)}
      />
      <MovieSelect
        options={getCountryOptions(filters)}
        defaultValue={countryId}
        placeholder="Страна"
        isFetching={isFetching}
        onChange={(value?: number) => handleChange('countryId', value)}
      />
      {movieType !== 'animations' && (
        <MovieSelect
          options={getGenreOptions(filters)}
          defaultValue={genreId}
          placeholder="Жанр"
          isFetching={isFetching}
          onChange={(value?: number) => handleChange('genreId', value)}
        />
      )}
      <MovieSelect
        options={getYearsOptions()}
        defaultValue={year}
        placeholder="Год"
        isFetching={isFetching}
        onChange={(value?: number) => handleChange('year', value)}
      />
    </div>
  );
};
