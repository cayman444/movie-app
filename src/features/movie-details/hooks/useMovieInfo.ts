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

  const actorsInfo = useMemo(
    () => staffInfo?.filter((staff) => staff.professionKey === 'ACTOR'),
    [staffInfo]
  );

  const directorsInfo = useMemo(
    () => staffInfo?.filter((staff) => staff.professionKey === 'DIRECTOR'),
    [staffInfo]
  );

  return {
    movieInfo,
    actorsInfo,
    directorsInfo,
    movieInfoLoading,
    staffInfoLoading,
  };
};
