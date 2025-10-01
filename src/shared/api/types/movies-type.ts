export type CollectionMovieType =
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

type PremieresMovieMonth =
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

export interface CollectionMoviesParams {
  type?: CollectionMovieType;
  page?: number;
}
export interface PremiereMoviesParams {
  year: number;
  month: PremieresMovieMonth;
}
export interface MovieParams {
  id: number;
}
