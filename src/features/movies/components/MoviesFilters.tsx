import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
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
  const {
    filters,
    isFetching,
    countryId,
    genreId,
    order,
    year,
    search,
    handleChangeSelect,
    handleChangeInput,
  } = useFilters(movieType);

  return (
    <div className={clsx(className, 'flex gap-2')}>
      <Input
        name="search-movie-filter"
        className={'max-w-100'}
        suffix={<SearchOutlined style={{ fontSize: 18 }} />}
        placeholder="Поиск..."
        value={search}
        onChange={handleChangeInput}
      />
      <MovieSelect
        options={getOrderOptions()}
        defaultValue={order}
        placeholder="Сортировка"
        isFetching={isFetching}
        onChange={(value?: string) => handleChangeSelect('order', value)}
      />
      <MovieSelect
        options={getCountryOptions(filters)}
        defaultValue={countryId}
        placeholder="Страна"
        isFetching={isFetching}
        onChange={(value?: number) => handleChangeSelect('countryId', value)}
      />
      {movieType !== 'animations' && (
        <MovieSelect
          options={getGenreOptions(filters)}
          defaultValue={genreId}
          placeholder="Жанр"
          isFetching={isFetching}
          onChange={(value?: number) => handleChangeSelect('genreId', value)}
        />
      )}
      <MovieSelect
        options={getYearsOptions()}
        defaultValue={year}
        placeholder="Год"
        isFetching={isFetching}
        onChange={(value?: number) => handleChangeSelect('year', value)}
      />
    </div>
  );
};
