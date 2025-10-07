import { useGetFiltersQuery } from '@/shared/api/endpoints';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

export const MoviesFilters: FC<ComponentProps<'div'>> = ({ className }) => {
  const { data: filters, isFetching } = useGetFiltersQuery({});

  return (
    <div className={clsx(className, 'flex gap-2')}>
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Страна"
        style={{ width: 200 }}
        loading={isFetching}
        options={filters?.countries}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Жанр"
        style={{ width: 200 }}
        loading={isFetching}
        options={filters?.genres}
      />
    </div>
  );
};
