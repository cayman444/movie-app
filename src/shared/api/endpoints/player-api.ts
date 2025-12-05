import type { PlayersInfo } from '@/entities/player/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api4.rhserv.vu/';

export const playerApi = createApi({
  reducerPath: 'playerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPlayer: builder.query<PlayersInfo, { id: string }>({
      query: ({ id }) => {
        const formData = new FormData();
        formData.append('kinopoisk', id);

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
