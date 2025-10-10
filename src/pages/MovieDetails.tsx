import { Movie } from '@/features/movies/components';
import { useEffect } from 'react';

const MovieDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="pt-38 pb-18">
      <Movie />
    </main>
  );
};

export default MovieDetails;
