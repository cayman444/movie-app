import type { CollectionMovieType } from '@/shared/api/types';
import type { Movie } from './movie';

export interface CollectionMovies {
  total: number;
  totalPages: number;
  items: Movie[];
}

export interface MoviesCollectionItem {
  path: string;
  title: string;
  type: CollectionMovieType;
}

export type MoviesSelection = Omit<MoviesCollectionItem, 'path'>;

export type MoviesCollections = MoviesCollectionItem[];
