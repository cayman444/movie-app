import { Container } from '@/app/layouts';
import { HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export const Header = () => {
  return (
    <header className="fixed bg-neutral-900/80 text-white py-5 z-2 backdrop-blur-sm w-full">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 cursor-pointer group font-semibold">
            <HomeOutlined
              style={{ fontSize: 18 }}
              className="group-hover:!text-neutral-400 transition-colors"
            />
            <h2 className="group-hover:text-neutral-400 transition-colors">
              Home
            </h2>
          </div>
          <Input
            name="search-movie"
            className={'max-w-104'}
            placeholder="Search movies..."
            suffix={<SearchOutlined style={{ fontSize: 18 }} />}
          />
          <ul className="flex items-center gap-4 font-semibold [&>li]:cursor-pointer [&>li]:transition-colors [&>li]:hover:text-neutral-400 ">
            <li>Movies</li>
            <li>Series</li>
            <li>Animation</li>
          </ul>
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="group-hover:text-neutral-400 transition-colors">
              Login
            </span>
            <UserOutlined className="group-hover:!text-neutral-400 transition-colors" />
          </div>
        </div>
      </Container>
    </header>
  );
};
