export interface SimilarMovies {
  total: number;
  items: VisibleMoviesList;
}

export interface VisibleMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export type VisibleMoviesList = VisibleMovie[];
