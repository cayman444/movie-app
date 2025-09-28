type AvailableMonth =
  | 'JANUARY'
  | 'FEBRUARY'
  | 'MARCH'
  | 'APRIL'
  | 'MAY'
  | 'JUNE'
  | 'JULY'
  | 'AUGUST'
  | 'SEPTEMBER'
  | 'OCTOBER'
  | 'NOVEMBER'
  | 'DECEMBER';

export interface PremieresFilmsParams {
  year: number;
  month: AvailableMonth;
}

export interface PremieresFilms {
  total: number;
  items: PremieresFilm[];
}

export interface PremieresFilm {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: FilmCountry[];
  genres: FilmGenre[];
  duration: number;
  premiereRu: string;
}

export interface FilmCountry {
  country: string;
}
export interface FilmGenre {
  genre: string;
}
