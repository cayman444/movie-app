import {
  useGetMovieQuery,
  useGetPlayerQuery,
  useGetSequelsPrequelsQuery,
} from '@/shared/api/endpoints';
import { useState } from 'react';
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
  const { data: sequelsPrequels, isFetching: sequelsPrequelsLoading } =
    useGetSequelsPrequelsQuery({ id: +movieId }, { skip: !movieId });

  const onChangeSelectedPlayerIndex = (value: string) => {
    setSelectedPlayerIndex(+value);
  };

  return {
    selectedPlayerIndex,
    playersInfo,
    movieInfo,
    sequelsPrequels,
    playersInfoLoading,
    movieInfoLoading,
    sequelsPrequelsLoading,
    onChangeSelectedPlayerIndex,
  };
};
