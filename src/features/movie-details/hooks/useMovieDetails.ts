import {
  useGetMovieQuery,
  useGetPlayerQuery,
  useGetSequelsPrequelsQuery,
  useGetSimilarMoviesQuery,
} from '@/shared/api/endpoints';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useMovieDetails = () => {
  const { id } = useParams();
  const movieId = id || '';
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
  const { data: playersInfo, isFetching: playersInfoLoading } =
    useGetPlayerQuery({ id: movieId }, { skip: !movieId });
  const { data: movieInfo, isFetching: movieInfoLoading } = useGetMovieQuery(
    { id: +movieId },
    { skip: !movieId }
  );
  const { currentData: sequelsPrequels, isFetching: sequelsPrequelsLoading } =
    useGetSequelsPrequelsQuery({ id: +movieId }, { skip: !movieId });

  const { data: similarMovies, isFetching: SimilarMoviesLoading } =
    useGetSimilarMoviesQuery({ id: +movieId }, { skip: !movieId });

  const onChangeSelectedPlayerIndex = (value: string) => {
    setSelectedPlayerIndex(+value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return {
    selectedPlayerIndex,
    playersInfo,
    movieInfo,
    sequelsPrequels,
    similarMovies,
    playersInfoLoading,
    movieInfoLoading,
    sequelsPrequelsLoading,
    SimilarMoviesLoading,
    onChangeSelectedPlayerIndex,
  };
};
