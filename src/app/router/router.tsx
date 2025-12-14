import { RootLayout } from '@/app/layouts';
import {
  MOVIES_LIST_BASE,
  MOVIES_LIST_COLLECTIONS,
} from '@/entities/movie/constants';
import { MOVIES_ROUTES } from '@/shared/constants';
import { SuspenseLoader } from '@/shared/ui';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
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
        element: <Home />,
      },
      {
        path: MOVIES_ROUTES.DETAILS_MOVIE.path,
        element: <MovieDetails />,
        loader: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
      },
      ...MOVIES_LIST_COLLECTIONS.map(({ path, ...params }) => ({
        path,
        element: <MoviesSelection key={params.type} {...params} />,
      })),
      ...MOVIES_LIST_BASE.map(({ path, ...params }) => ({
        path,
        element: <Movies key={path} {...params} />,
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
