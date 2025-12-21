import { useGetMoviesQuery } from '@/shared/api/endpoints';
import { useDebounce } from '@/shared/hooks';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, type AutoCompleteProps } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const DropdownMenuSearch = () => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const debouncedSearch = useDebounce(search);

  const { data } = useGetMoviesQuery({ search: debouncedSearch });

  useEffect(() => {
    const formattedData: AutoCompleteProps['options'] = data?.items.map(
      ({ nameRu, kinopoiskId }) => ({
        title: nameRu,
        label: <Link to={`movies/${kinopoiskId}`}>{nameRu}</Link>,
      })
    );

    setOptions(formattedData);
  }, [data]);

  const onChange = (data: string) => {
    setSearch(data);
  };

  return (
    <>
      <AutoComplete
        options={options}
        value={search}
        onChange={onChange}
        className={'w-104'}
        suffixIcon={<SearchOutlined style={{ fontSize: 18 }} />}
        placeholder="Искать фильмы..."
      />
    </>
  );
};
