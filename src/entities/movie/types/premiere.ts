import type { MovieCountry, MovieGenre } from './movie';

export interface PremiereMovies {
  total: number;
  items: PremiereMovie[];
}

export interface PremiereMovie {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: MovieCountry[];
  genres: MovieGenre[];
  duration: number;
  premiereRu: string;
}
