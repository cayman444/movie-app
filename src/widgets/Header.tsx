import { Container } from '@/app/layouts';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export const Header = () => {
  return (
    <header className="bg-neutral-900 text-white py-5">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <ul className="flex items-center gap-4 font-semibold">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Genre</li>
            <li className="cursor-pointer">Country</li>
          </ul>
          <Input
            className={'max-w-104'}
            placeholder="Search movies..."
            suffix={<SearchOutlined style={{ fontSize: 20 }} />}
          />
          <ul className="flex items-center gap-4 font-semibold">
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">Series</li>
            <li className="cursor-pointer">Animation</li>
          </ul>
          <div className="flex items-center gap-2 cursor-pointer">
            <span>Login</span> <UserOutlined />
          </div>
        </div>
      </Container>
    </header>
  );
};
