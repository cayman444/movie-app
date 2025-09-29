import {
  MoviePreview,
  MoviesAllCollections,
  MoviesPremieres,
} from '@/features/movies/components';

const Movies = () => {
  return (
    <>
      <MoviePreview />
      <MoviesPremieres />
      <MoviesAllCollections />
    </>
  );
};

export default Movies;
