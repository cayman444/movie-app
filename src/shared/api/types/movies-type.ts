import type {
  CollectionMovieType,
  PremieresMovieMonth,
} from './movies-filters';

export interface CollectionMoviesParams {
  type?: CollectionMovieType;
  page?: number;
}
export interface PremiereMoviesParams {
  year: number;
  month: PremieresMovieMonth;
}
