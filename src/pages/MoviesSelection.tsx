import { MoviesAllSelection } from '@/features/movies-collections/components';
import type { MoviesSelection } from '@/features/movies-collections/types';
import { type FC } from 'react';

const MoviesSelection: FC<MoviesSelection> = (params) => {
  return (
    <main className="pt-30 pb-18">
      <MoviesAllSelection {...params} />
    </main>
  );
};

export default MoviesSelection;
