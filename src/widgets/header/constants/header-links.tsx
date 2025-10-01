import { MOVIES_ROUTES } from '@/shared/constants';

export const HEADER_LINKS = [
  {
    key: '1',
    text: MOVIES_ROUTES.MOVIES.title,
    link: MOVIES_ROUTES.MOVIES.path,
  },
  {
    key: '2',
    text: MOVIES_ROUTES.SERIALS.title,
    link: MOVIES_ROUTES.SERIALS.path,
  },
  {
    key: '3',
    text: MOVIES_ROUTES.ANIMATIONS.title,
    link: MOVIES_ROUTES.ANIMATIONS.path,
  },
];
