import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CollectionFilms, CollectionFilmsParams } from '../types';

const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/';

export const filmsApi = createApi({
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
    getCollectionsFilms: builder.query<CollectionFilms, CollectionFilmsParams>({
      query: ({ type }) => `v2.2/films/collections?type=${type}`,
    }),
  }),
});

export const { useGetCollectionsFilmsQuery } = filmsApi;
