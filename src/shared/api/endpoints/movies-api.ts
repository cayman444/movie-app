import type { CollectionMovies } from '@/entities/movie/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CollectionMoviesParams } from '../types';

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
  }),
});

export const { useGetCollectionsMoviesQuery } = moviesApi;
