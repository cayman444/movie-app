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
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={filters?.countries}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Жанр"
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={filters?.genres}
      />
      <Select
        suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
        placeholder="Год"
        allowClear
        style={{ width: 200 }}
        loading={isFetching}
        options={Array.from({ length: 60 }, (_, ind) => ({
          label: new Date().getFullYear() - ind,
          value: new Date().getFullYear() - ind,
        }))}
      />
    </div>
  );
};
