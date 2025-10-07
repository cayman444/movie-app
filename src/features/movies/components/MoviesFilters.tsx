import { useGetFiltersQuery } from '@/shared/api/endpoints';
import { Select } from 'antd';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

export const MoviesFilters: FC<ComponentProps<'div'>> = ({ className }) => {
  const { data: filters, isFetching } = useGetFiltersQuery({});

  return (
    <div className={clsx(className, 'flex gap-2')}>
      <Select
        placeholder="Страна"
        style={{ width: 140 }}
        loading={isFetching}
        options={filters?.countries}
      />
      <Select
        placeholder="Жанр"
        style={{ width: 140 }}
        loading={isFetching}
        options={filters?.genres}
      />
    </div>
  );
};
