import { useParams } from 'react-router-dom';
import { useMovieInfo } from './useMovieInfo';
import { usePlayersInfo } from './usePlayersInfo';
import { useRelatedMovies } from './useRelatedMovies';

export const useMovieDetails = () => {
  const { id } = useParams();
  const movieId = id || '';

  const playerData = usePlayersInfo(movieId);
  const movieData = useMovieInfo(movieId);
  const relatedData = useRelatedMovies(movieId);

  return {
    ...playerData,
    ...movieData,
    ...relatedData,
  };
};
