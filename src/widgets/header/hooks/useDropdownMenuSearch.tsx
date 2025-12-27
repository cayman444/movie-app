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
      ({ nameRu, kinopoiskId, posterUrl }) => ({
        title: nameRu,
        label: (
          <div className="flex gap-3 items-center min-w-0">
            <img
              className="w-12 h-16 object-cover rounded"
              src={posterUrl}
              alt={nameRu}
            />
            <div className="truncate">{nameRu}</div>
          </div>
        ),
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
