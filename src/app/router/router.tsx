import { RootLayout } from '@/app/layouts';
import { MOVIES_LIST_COLLECTIONS, MOVIES_ROUTES } from '@/shared/constants';
import { SuspenseLoader } from '@/shared/ui';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Movies = lazy(() => import('@/pages/Movies'));
const MoviesSelection = lazy(() => import('@/pages/MoviesSelection'));
const MovieDetails = lazy(() => import('@/pages/MovieDetails'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: MOVIES_ROUTES.DETAILS_MOVIE.path,
        element: <MovieDetails />,
      },
      ...MOVIES_LIST_COLLECTIONS.map(({ path, ...params }) => ({
        path,
        element: <MoviesSelection key={params.type} {...params} />,
      })),
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
