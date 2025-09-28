export type CollectionFilmType =
  | 'TOP_POPULAR_ALL'
  | 'TOP_POPULAR_MOVIES'
  | 'TOP_250_TV_SHOWS'
  | 'TOP_250_MOVIES'
  | 'VAMPIRE_THEME'
  | 'COMICS_THEME'
  | 'CLOSES_RELEASES'
  | 'FAMILY'
  | 'OSKAR_WINNERS_2021'
  | 'LOVE_THEME'
  | 'ZOMBIE_THEME'
  | 'CATASTROPHE_THEME'
  | 'KIDS_ANIMATION_THEME'
  | 'POPULAR_SERIES';

export interface CollectionFilmsParams {
  type?: CollectionFilmType;
  page?: number;
}

export interface CollectionFilms {
  total: number;
  totalPages: number;
  items: CollectionFilm[];
}

export interface CollectionFilm {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: FilmCountry[];
  genres: FilmGenre[];
  ratingKinopoisk: number;
  ratingImbd: number;
  year: string;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface FilmCountry {
  country: string;
}
export interface FilmGenre {
  genre: string;
}
