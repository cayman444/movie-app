import type { MoviesCollections } from '../types';
import { MOVIES_ROUTES } from './routing';

export const MOVIES_LIST_COLLECTIONS: MoviesCollections = [
  {
    path: MOVIES_ROUTES.POPULAR.path,
    title: MOVIES_ROUTES.POPULAR.title,
    type: 'TOP_POPULAR_MOVIES',
  },
  {
    path: MOVIES_ROUTES.BEST.path,
    title: MOVIES_ROUTES.BEST.title,
    type: 'TOP_250_MOVIES',
  },
  {
    path: MOVIES_ROUTES.POPULAR_SERIALS.path,
    title: MOVIES_ROUTES.POPULAR_SERIALS.title,
    type: 'POPULAR_SERIES',
  },
  {
    path: MOVIES_ROUTES.FAMILY_MOVIES.path,
    title: MOVIES_ROUTES.FAMILY_MOVIES.title,
    type: 'FAMILY',
  },
  {
    path: MOVIES_ROUTES.ROMANTIC_MOVIES.path,
    title: MOVIES_ROUTES.ROMANTIC_MOVIES.title,
    type: 'LOVE_THEME',
  },
  {
    path: MOVIES_ROUTES.ZOMBIE_MOVIES.path,
    title: MOVIES_ROUTES.ZOMBIE_MOVIES.title,
    type: 'ZOMBIE_THEME',
  },
  {
    path: MOVIES_ROUTES.CATASTROPHE_MOVIES.path,
    title: MOVIES_ROUTES.CATASTROPHE_MOVIES.title,
    type: 'CATASTROPHE_THEME',
  },
  {
    path: MOVIES_ROUTES.COMICS_MOVIES.path,
    title: MOVIES_ROUTES.COMICS_MOVIES.title,
    type: 'COMICS_THEME',
  },
];
