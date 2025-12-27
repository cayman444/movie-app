import type { OrderMovies } from '@/shared/api/types';

export const isOrderMovies = (value: unknown): value is OrderMovies => {
  return value === 'RATING' || value === 'NUM_VOTE' || value === 'YEAR';
};
