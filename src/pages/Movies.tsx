import { MoviesAllCollections } from '@/features/movies-collections/components';
import { MoviePreview, MoviesPremieres } from '@/features/movies/components';
import { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="pb-18">
      <MoviePreview />
      <MoviesPremieres />
      <MoviesAllCollections />
    </main>
  );
};

export default Movies;
