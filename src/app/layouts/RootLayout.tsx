import { SuspenseLoader } from '@/shared/ui';
import { Header } from '@/widgets';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <SuspenseLoader>
        <Outlet />
      </SuspenseLoader>
      <footer>footer</footer>
    </>
  );
};
