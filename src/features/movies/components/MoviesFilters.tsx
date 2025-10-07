import { useGetFiltersQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { changeFilter } from '../model';
import { getMoviesYears } from '../utils';

export const MoviesFilters: FC<ComponentProps<'div'>> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { data: filters, isFetching } = useGetFiltersQuery({});
  const { countryId } = useAppSelector((state) => state.filters.movies);

  const handleChangeCountry = (value?: number) => {
    dispatch(changeFilter({ type: 'movies', filter: 'countryId', value }));
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
        options={[
          { label: 'По оценкам', value: 'По оценкам' },
          { label: 'По рейтингу', value: 'По рейтингу' },
          { label: 'По году', value: 'По году' },
        ]}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Страна"
        onChange={handleChangeCountry}
        defaultValue={countryId}
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={filters?.countries.map(({ country, id }) => ({
          label: country,
          value: id,
        }))}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Жанр"
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={filters?.genres.map((g) => ({
          label: g.genre,
          value: g.genre,
        }))}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Год"
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={getMoviesYears()}
      />
    </div>
  );
};
