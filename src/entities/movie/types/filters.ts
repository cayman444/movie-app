import type { OrderMovies, TypeMovies } from '@/shared/api/types';
import type { MovieCountry, MovieGenre } from './movie';

export interface MovieFilterGenre extends MovieGenre {
  id: number;
}

export interface MovieFilterCountry extends MovieCountry {
  id: number;
}

export interface Filters {
  genres: MovieFilterGenre[];
  countries: MovieFilterCountry[];
}

export interface FiltersItem {
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
