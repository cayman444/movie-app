import { useGetFiltersQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { changeFilter } from '../model';
import {
  getCountryOptions,
  getGenreOptions,
  getOrderOptions,
  getYearsOptions,
} from '../utils';

export const MoviesFilters: FC<ComponentProps<'div'>> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { data: filters, isFetching } = useGetFiltersQuery({});
  const { countryId, year } = useAppSelector((state) => state.filters.movies);

  const handleChangeCountry = (value?: number) => {
    dispatch(changeFilter({ type: 'movies', filter: 'countryId', value }));
  };

  const handleChangeYear = (value?: number) => {
    dispatch(changeFilter({ type: 'movies', filter: 'year', value }));
  };

  return (
    <div className={clsx(className, 'flex gap-2')}>
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Сортировка"
        defaultValue="По оценкам"
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={getOrderOptions()}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Страна"
        onChange={handleChangeCountry}
        defaultValue={countryId}
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={getCountryOptions(filters)}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Жанр"
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={getGenreOptions(filters)}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Год"
        defaultValue={year}
        onChange={handleChangeYear}
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={getYearsOptions()}
      />
    </div>
  );
};
