import type { SimilarMoviesList } from '@/entities/movie/types';
import type { FC } from 'react';
import { useVisibleItems } from '../hooks';
import { VisibleItemsButton } from '../ui';
import { VisibleItem } from './VisibleItem';

interface SimilarMoviesProps {
  similarMovies: SimilarMoviesList;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({ similarMovies }) => {
  const { isVisibleAll, visibleItems, hiddenCount, handleChangeVisible } =
    useVisibleItems(similarMovies);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Похожие</h2>
        {hiddenCount > 0 && (
          <VisibleItemsButton
            hiddenCount={hiddenCount}
            isVisibleAll={isVisibleAll}
            handleChangeVisible={handleChangeVisible}
          />
        )}
      </div>
      <ul className="grid grid-cols-6 gap-4">
        {visibleItems.map((data) => (
          <VisibleItem key={data.filmId} {...data} />
        ))}
      </ul>
    </div>
  );
};
