import { RootLayout } from '@/app/layouts';
import { SuspenseLoader } from '@/shared/ui';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Movies = lazy(() => import('@/pages/Movies'));
const MovieDetails = lazy(() => import('@/pages/MovieDetails'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const ROUTES_PATHS = {
  HOME: '/',
  DETAILS: '/details/:id',
} as const;

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: ROUTES_PATHS.DETAILS,
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <SuspenseLoader>
        <NotFound />
      </SuspenseLoader>
    ),
  },
]);
