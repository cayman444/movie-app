import { SuspenseLoader } from '@/shared/ui/SuspenseLoader';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <header>header</header>
      <main>
        <SuspenseLoader>
          <Outlet />
        </SuspenseLoader>
      </main>
      <footer>footer</footer>
    </>
  );
};
