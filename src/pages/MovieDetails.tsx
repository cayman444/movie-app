import { Movie } from '@/features/movie-details/components';
import { useEffect } from 'react';

const MovieDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="pt-30 pb-18">
      <Movie />
    </main>
  );
};

export default MovieDetails;
