import type { MoviesCollectionItem } from '@/entities/movie/types';

export type MoviesSelection = Omit<MoviesCollectionItem, 'path'>;
