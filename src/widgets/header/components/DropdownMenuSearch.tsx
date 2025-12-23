import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete } from 'antd';
import { useDropdownMenuSearch } from '../hooks';

export const DropdownMenuSearch = () => {
  const { search, options, onChange, onSelect } = useDropdownMenuSearch();

  return (
    <>
      <AutoComplete
        options={options}
        value={search}
        onChange={onChange}
        onSelect={onSelect}
        classNames={{
          popup: { root: '!z-10' },
        }}
        className={'w-104'}
        suffixIcon={<SearchOutlined style={{ fontSize: 18, color: 'white' }} />}
        placeholder="Искать фильмы..."
      />
    </>
  );
};
