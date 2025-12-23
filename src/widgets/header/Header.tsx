import { Container } from '@/app/layouts';
import { MOVIES_LIST_BASE } from '@/entities/movie/constants';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuSearch } from './components';

export const Header = () => {
  return (
    <header className="fixed bg-neutral-900/80 text-white py-5 z-3 backdrop-blur-sm w-full md:flex-wrap">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <DropdownMenu />
          <DropdownMenuSearch />
          <ul className="hidden md:flex items-center gap-4 font-semibold [&>li]:cursor-pointer [&>li]:transition-colors [&>li]:hover:text-neutral-400">
            {MOVIES_LIST_BASE.map(({ path, title }) => (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};
