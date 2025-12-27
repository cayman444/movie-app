import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AntdProvider, StoreProvider } from './app/providers';
import { router } from './app/router';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <AntdProvider>
        <RouterProvider router={router} />
      </AntdProvider>
    </StoreProvider>
  </StrictMode>
);
