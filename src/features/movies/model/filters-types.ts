import type { OrderMovies, TypeMovies } from '@/shared/api/types';

export interface FiltersState {
  movies: Filters;
  serials: Filters;
  animations: Filters;
}

export interface FilterParams {
  type: keyof FiltersState;
  filter: keyof Filters;
  value: Filters[keyof Filters];
}

interface Filters {
  countries?: number;
  genres?: number;
  order?: OrderMovies;
  type?: TypeMovies;
  ratingFrom?: number;
  ratingTo?: number;
  year?: number;
  imdbId?: string;
  keyword?: string;
  page?: number;
}
