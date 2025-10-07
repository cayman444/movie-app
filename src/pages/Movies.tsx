import { MoviesList } from '@/features/movies/components';
import { type FC, useEffect } from 'react';

const Movies: FC = (params) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="pt-30 pb-18">
      <MoviesList {...params} />
    </main>
  );
};

export default Movies;
