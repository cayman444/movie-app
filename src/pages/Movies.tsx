import { MoviesAllCollections } from '@/features/movies-collections/components';
import { MoviePreview, MoviesPremieres } from '@/features/movies/components';

const Movies = () => {
  return (
    <main className="pb-18">
      <MoviePreview />
      <MoviesPremieres />
      <MoviesAllCollections />
    </main>
  );
};

export default Movies;
