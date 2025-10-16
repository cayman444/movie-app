import { useGetMovieQuery, useGetStaffQuery } from '@/shared/api/endpoints';

export const useMovieInfo = (movieId: string) => {
  const { data: movieInfo, isFetching: movieInfoLoading } = useGetMovieQuery(
    { id: +movieId },
    { skip: !movieId }
  );

  const { data: staffInfo, isFetching: staffInfoLoading } = useGetStaffQuery(
    { id: +movieId },
    { skip: !movieId }
  );

  return { movieInfo, staffInfo, movieInfoLoading, staffInfoLoading };
};
