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
