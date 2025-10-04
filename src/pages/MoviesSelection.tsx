import { MoviesAllSelection } from '@/features/movies-collections/components';
import type { MoviesSelection } from '@/features/movies-collections/types';
import { type FC, useEffect } from 'react';

const MoviesSelection: FC<MoviesSelection> = (params) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="pt-30 pb-18">
      <MoviesAllSelection {...params} />
    </main>
  );
};

export default MoviesSelection;
