import type {
  CollectionMovies,
  Filters,
  FiltersItem,
  MovieDetails,
  MovieList,
  PremiereMovies,
  SimilarMovies,
  VisibleMoviesList,
} from '@/entities/movie/types';
import { BASE_URL } from '@/shared/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CollectionMoviesParams, PremiereMoviesParams } from '../types';

export const moviesApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', import.meta.env.VITE_API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCollectionsMovies: builder.query<
      CollectionMovies,
      CollectionMoviesParams
    >({
      query: ({ type, page }) =>
        `v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getPremieresMovies: builder.query<PremiereMovies, PremiereMoviesParams>({
      query: ({ year, month }) =>
        `v2.2/films/premieres?year=${year}&month=${month}`,
    }),
    getMovie: builder.query<MovieDetails, { id: number }>({
      query: ({ id }) => `v2.2/films/${id}`,
    }),
    getMovies: builder.query<MovieList, FiltersItem>({
      query: ({
        page = '',
        countryId = '',
        genreId = '',
        year = '',
        order = 'NUM_VOTE',
        type = '',
        search = '',
      }) =>
        `v2.2/films?type=${type}&page=${page}&order=${order}&countries=${countryId}&genres=${genreId}&yearFrom=${year}&yearTo=${year}&keyword=${search}`,
    }),
    getFilters: builder.query<Filters, object>({
      query: () => '/v2.2/films/filters',
    }),
    getSequelsPrequels: builder.query<VisibleMoviesList, { id: number }>({
      query: ({ id }) => `/v2.1/films/${id}/sequels_and_prequels`,
    }),
    getSimilarMovies: builder.query<SimilarMovies | null, { id: number }>({
      query: ({ id }) => `/v2.2/films/${id}/similars`,
      transformResponse: (value: SimilarMovies) => {
        return value.total ? value : null;
      },
    }),
  }),
});

export const {
  useGetCollectionsMoviesQuery,
  useGetPremieresMoviesQuery,
  useGetMovieQuery,
  useGetMoviesQuery,
  useGetFiltersQuery,
  useLazyGetSequelsPrequelsQuery,
  useLazyGetSimilarMoviesQuery,
} = moviesApi;
