import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api4.rhhhhhhh.live/';

export const playerApi = createApi({
  reducerPath: 'playerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPlayer: builder.query<unknown, unknown>({
      query: () => {
        const formData = new FormData();
        formData.append('kinopoisk', '277537');
        formData.append('type', 'movie');

        return {
          url: 'cache',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const { useGetPlayerQuery } = playerApi;
