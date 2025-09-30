import { SuspenseLoader } from '@/shared/ui';
import { Header } from '@/widgets';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <SuspenseLoader>
        <main className="pb-18">
          <Outlet />
        </main>
      </SuspenseLoader>
      <footer>footer</footer>
    </>
  );
};
