import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';

interface MovieSelectProps<T> {
  onChange?: (value?: T) => void;
  placeholder: string;
  defaultValue?: T;
  isFetching: boolean;
  options?: { label: string | number; value: string | number }[];
}

export const MovieSelect = <T,>({
  options,
  defaultValue,
  placeholder,
  isFetching,
  onChange,
}: MovieSelectProps<T>) => {
  return (
    <Select
      suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      allowClear
      style={{ width: 200 }}
      loading={isFetching}
      options={options}
    />
  );
};
