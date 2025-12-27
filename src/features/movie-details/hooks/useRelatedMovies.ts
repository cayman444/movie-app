import {
  useLazyGetSequelsPrequelsQuery,
  useLazyGetSimilarMoviesQuery,
} from '@/shared/api/endpoints';
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

export const useRelatedMovies = (movieId: string) => {
  const { ref: refSequelsPrequels, inView: inViewSequelsPrequels } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { ref: refSimilarMovies, inView: inViewSimilarMovies } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [
    fetchSequelsPrequels,
    { currentData: sequelsPrequels, isFetching: sequelsPrequelsLoading },
  ] = useLazyGetSequelsPrequelsQuery();

  const [
    fetchSimilarMovies,
    { data: similarMovies, isFetching: similarMoviesLoading },
  ] = useLazyGetSimilarMoviesQuery();

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

  return useMemo(
    () => ({
      sequelsPrequels,
      similarMovies,
      refSequelsPrequels,
      refSimilarMovies,
      sequelsPrequelsLoading,
      similarMoviesLoading,
    }),
    [
      refSequelsPrequels,
      refSimilarMovies,
      sequelsPrequels,
      sequelsPrequelsLoading,
      similarMovies,
      similarMoviesLoading,
    ]
  );
};
