import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PremieresFilmsParams } from '../types';

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
    getPremieresFilms: builder.query<unknown, PremieresFilmsParams>({
      query: ({ month, year }) =>
        `v2.2/films/premieres?month=${month}&year=${year}`,
    }),
  }),
});

export const { useGetPremieresFilmsQuery } = filmsApi;
