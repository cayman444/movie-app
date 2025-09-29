import { MoviesAllCollections } from '@/features/movies-collections/components';
import { MoviePreview, MoviesPremieres } from '@/features/movies/components';

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
