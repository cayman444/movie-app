import type { MoviesCollectionItem } from '@/shared/types';

export type MoviesSelection = Omit<MoviesCollectionItem, 'path'>;
