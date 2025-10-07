import type { MovieCountry, MovieGenre } from './movie';

export interface MovieFilterGenre extends MovieGenre {
  id: number;
}

export interface MovieFilterCountry extends MovieCountry {
  id: number;
}

export interface MovieTransformFilterCountry {
  value: string;
  label: string;
}

export interface MovieTransformFilterGenre {
  value: string;
  label: string;
}

export interface Filters {
  genres: MovieFilterGenre[];
  countries: MovieFilterCountry[];
}

export interface TransformFilters {
  genres: MovieTransformFilterGenre[];
  countries: MovieTransformFilterCountry[];
}
