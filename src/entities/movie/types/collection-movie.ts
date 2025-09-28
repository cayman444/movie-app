import type { MovieCountry, MovieGenre } from '@/shared/types';

export interface CollectionMovies {
  total: number;
  totalPages: number;
  items: CollectionMovie[];
}

export interface CollectionMovie {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: MovieCountry[];
  genres: MovieGenre[];
  ratingKinopoisk: number;
  ratingImbd: number;
  year: string;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}
