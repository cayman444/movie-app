import { Container } from '@/app/layouts';
import { HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Input } from 'antd';
import { Link } from 'react-router-dom';
import { HEADER_LINKS, HEADER_MENU } from './constants';

export const Header = () => {
  return (
    <header className="fixed bg-neutral-900/80 text-white py-5 z-2 backdrop-blur-sm w-full">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Dropdown
            overlayClassName="!pt-4 [&_.ant-dropdown-menu-item]:!px-4 [&_.ant-dropdown-menu-item]:!py-2"
            menu={{ items: HEADER_MENU }}
          >
            <div className="flex items-center gap-2 cursor-pointer font-semibold">
              <HomeOutlined style={{ fontSize: 18 }} />
              <h2>Главная</h2>
            </div>
          </Dropdown>
          <Input
            name="search-movie"
            className={'max-w-104'}
            placeholder="Search movies..."
            suffix={<SearchOutlined style={{ fontSize: 18 }} />}
          />
          <ul className="flex items-center gap-4 font-semibold [&>li]:cursor-pointer [&>li]:transition-colors [&>li]:hover:text-neutral-400 ">
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
