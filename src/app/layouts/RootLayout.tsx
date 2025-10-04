import { SuspenseLoader } from '@/shared/ui';
import { Header } from '@/widgets/header';
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
