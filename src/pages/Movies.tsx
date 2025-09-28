import {
  MoviePreview,
  MoviesPopular,
  MoviesPremieres,
} from '@/features/movies/components';

const Movies = () => {
  return (
    <>
      <MoviePreview />
      <MoviesPremieres />
      <MoviesPopular />
    </>
  );
};

export default Movies;
