import { SuspenseLoader } from '@/shared/ui';
import { Header } from '@/widgets';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <SuspenseLoader>
          <Outlet />
        </SuspenseLoader>
      </main>
      <footer>footer</footer>
    </>
  );
};
