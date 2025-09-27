import { SuspenseLoader } from '@/shared/ui/SuspenseLoader';
import { Header } from '@/widgets/Header';
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
