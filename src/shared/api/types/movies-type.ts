import type {
  CollectionMovieType,
  OrderMovies,
  PremieresMovieMonth,
  TypeMovies,
} from './movies-filters';

export interface CollectionMoviesParams {
  type?: CollectionMovieType;
  page?: number;
}
export interface PremiereMoviesParams {
  year: number;
  month: PremieresMovieMonth;
}
export interface MovieDetailsParams {
  id: number;
}

export interface MovieParams {
  countryId?: number;
  genreId?: number;
  order?: OrderMovies;
  type?: TypeMovies;
  ratingFrom?: number;
  ratingTo?: number;
  year?: number;
  imdbId?: string;
  keyword?: string;
  page?: number;
}
