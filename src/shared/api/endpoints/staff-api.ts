import type { StaffInfoList } from '@/entities/staff/staff';
import { BASE_URL } from '@/shared/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const staffApi = createApi({
  reducerPath: 'staffApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', import.meta.env.VITE_API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStaff: builder.query<StaffInfoList, { id: number }>({
      query: ({ id }) => {
        return {
          url: '/v1/staff',
          params: {
            filmId: id,
          },
        };
      },
    }),
  }),
});

export const { useGetStaffQuery } = staffApi;
