import type { CollectionMovieType } from '../api/types';

export interface MoviesCollectionItem {
  path: string;
  title: string;
  type: CollectionMovieType;
}

export type MoviesCollections = MoviesCollectionItem[];
