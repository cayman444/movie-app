import { useGetMovieQuery, useGetStaffQuery } from '@/shared/api/endpoints';
import { useMemo } from 'react';

export const useMovieInfo = (movieId: string) => {
  const { data: movieInfo, isFetching: movieInfoLoading } = useGetMovieQuery(
    { id: +movieId },
    { skip: !movieId }
  );

  const { data: staffInfo, isFetching: staffInfoLoading } = useGetStaffQuery(
    { id: +movieId },
    { skip: !movieId }
  );

  return useMemo(
    () => ({
      movieInfo,
      staffInfo,
      movieInfoLoading,
      staffInfoLoading,
    }),
    [movieInfo, movieInfoLoading, staffInfo, staffInfoLoading]
  );
};
