import {
  useGetMovieQuery,
  useGetPlayerQuery,
  useLazyGetSequelsPrequelsQuery,
  useLazyGetSimilarMoviesQuery,
} from '@/shared/api/endpoints';
import { useGetStaffQuery } from '@/shared/api/endpoints/staff-api';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';

export const useMovieDetails = () => {
  const { id } = useParams();
  const { ref: refSequelsPrequels, inView: inViewSequelsPrequels } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { ref: refSimilarMovies, inView: inViewSimilarMovies } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const movieId = id || '';

  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);

  const { currentData: playersInfo, isFetching: playersInfoLoading } =
    useGetPlayerQuery({ id: movieId }, { skip: !movieId });

  const { data: movieInfo, isFetching: movieInfoLoading } = useGetMovieQuery(
    { id: +movieId },
    { skip: !movieId }
  );

  const [
    fetchSequelsPrequels,
    { currentData: sequelsPrequels, isFetching: sequelsPrequelsLoading },
  ] = useLazyGetSequelsPrequelsQuery();

  const [
    fetchSimilarMovies,
    { data: similarMovies, isFetching: similarMoviesLoading },
  ] = useLazyGetSimilarMoviesQuery();

  const onChangeSelectedPlayerIndex = (value: string) => {
    setSelectedPlayerIndex(+value);
  };

  const { data: staffInfo } = useGetStaffQuery(
    { id: +movieId },
    { skip: !movieId }
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (inViewSequelsPrequels) {
      fetchSequelsPrequels({ id: +movieId });
    }
  }, [fetchSequelsPrequels, inViewSequelsPrequels, movieId]);

  useEffect(() => {
    if (inViewSimilarMovies) {
      fetchSimilarMovies({ id: +movieId });
    }
  }, [fetchSimilarMovies, inViewSimilarMovies, movieId]);

  return {
    selectedPlayerIndex,
    playersInfo,
    movieInfo,
    sequelsPrequels,
    similarMovies,
    staffInfo,
    playersInfoLoading,
    movieInfoLoading,
    sequelsPrequelsLoading,
    similarMoviesLoading,
    onChangeSelectedPlayerIndex,
    refSequelsPrequels,
    refSimilarMovies,
  };
};
