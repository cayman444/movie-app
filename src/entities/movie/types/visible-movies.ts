export interface SimilarMovies {
  total: number;
  items: SimilarMoviesList;
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

export type SimilarMoviesList = VisibleMovie[];
export type SequelsPrequelsList = VisibleMovie[];
