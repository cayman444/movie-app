import { useGetMoviesQuery } from '@/shared/api/endpoints';
import { useDebounce } from '@/shared/hooks';
import type { AutoCompleteProps } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDropdownMenuSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const debouncedSearch = useDebounce(search);

  const { data } = useGetMoviesQuery({ search: debouncedSearch });

  useEffect(() => {
    const formattedData: AutoCompleteProps['options'] = data?.items.map(
      ({ nameRu, kinopoiskId }) => ({
        title: nameRu,
        label: nameRu,
        value: kinopoiskId.toString(),
      })
    );

    setOptions(formattedData);
  }, [data]);

  const onChange = (data: string) => {
    setSearch(data);
  };

  const onSelect = (kinopoiskId: string) => {
    navigate(`/movies/${kinopoiskId}`);
    setSearch('');
  };

  return { options, search, onChange, onSelect };
};
