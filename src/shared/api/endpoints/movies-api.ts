import type { CollectionMovies, PremiereMovies } from '@/entities/movie/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CollectionMoviesParams, PremiereMoviesParams } from '../types';

const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/';

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
      query: ({ type }) => `v2.2/films/collections?type=${type}`,
    }),
    getPremieresMovies: builder.query<PremiereMovies, PremiereMoviesParams>({
      query: ({ year, month }) =>
        `v2.2/films/premieres?year=${year}&month=${month}`,
    }),
  }),
});

export const { useGetCollectionsMoviesQuery, useGetPremieresMoviesQuery } =
  moviesApi;
