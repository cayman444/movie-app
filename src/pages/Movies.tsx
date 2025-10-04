import { MoviesList } from '@/features/movies/components';
import { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="pt-30 pb-18">
      <MoviesList />
    </main>
  );
};

export default Movies;
