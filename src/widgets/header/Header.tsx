import { Container } from '@/app/layouts';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { DropdownMenu } from './components';
import { HEADER_LINKS } from './constants';

export const Header = () => {
  return (
    <header className="fixed bg-neutral-900/80 text-white py-5 z-3 backdrop-blur-sm w-full">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <DropdownMenu />
          <Input
            name="search-movie"
            className={'max-w-104'}
            placeholder="Search movies..."
            suffix={<SearchOutlined style={{ fontSize: 18 }} />}
          />
          <ul className="flex items-center gap-4 font-semibold [&>li]:cursor-pointer [&>li]:transition-colors [&>li]:hover:text-neutral-400">
            {HEADER_LINKS.map(({ key, link, text }) => (
              <li key={key}>
                <Link to={link}>{text}</Link>
              </li>
            ))}
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
