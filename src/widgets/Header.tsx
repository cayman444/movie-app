import { Container } from '@/app/layouts';
import { HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export const Header = () => {
  return (
    <header className="fixed bg-neutral-900/80 text-white py-5 z-2 backdrop-blur-sm w-full">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <ul className="flex items-center gap-4 font-semibold">
            <div className="flex items-center gap-2 cursor-pointer">
              <HomeOutlined style={{ fontSize: 18 }} />
              <li>Home</li>
            </div>
          </ul>
          <Input
            className={'max-w-104'}
            placeholder="Search movies..."
            suffix={<SearchOutlined style={{ fontSize: 18 }} />}
          />
          <ul className="flex items-center gap-4 font-semibold [&>li]:cursor-pointer">
            <li>Movies</li>
            <li>Series</li>
            <li>Animation</li>
          </ul>
          <div className="flex items-center gap-2 cursor-pointer">
            <span>Login</span> <UserOutlined />
          </div>
        </div>
      </Container>
    </header>
  );
};
