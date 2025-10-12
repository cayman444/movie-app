import type { VisibleMoviesList } from '@/entities/movie/types';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { useVisibleItems } from '../hooks';
import { VisibleItemsButton } from '../ui';
import { VisibleItem } from './VisibleItem';

interface VisibleMoviesParams extends ComponentProps<'div'> {
  movies: VisibleMoviesList;
  title: string;
}

export const VisibleMovies: FC<VisibleMoviesParams> = ({
  movies,
  title,
  className,
}) => {
  const { isVisibleAll, visibleItems, hiddenCount, handleChangeVisible } =
    useVisibleItems(movies);

  return (
    <div className={clsx('flex flex-col gap-6', className)}>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">{title}</h2>
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
