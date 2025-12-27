import type { VisibleMoviesList } from '@/entities/movie/types';
import clsx from 'clsx';
import { type ComponentProps, memo } from 'react';
import { useRelatedItems } from '../hooks';
import { RelatedItemsButton, RelatedMoviesSkeleton } from '../ui';
import { RelatedItem } from './RelatedItem';

interface RelatedMoviesParams extends ComponentProps<'div'> {
  movies?: VisibleMoviesList;
  title: string;
  isLoading: boolean;
  ref: (node?: Element | null) => void;
}

export const RelatedMovies = memo(function RelatedMovies({
  movies,
  title,
  isLoading,
  className,
  ref,
}: RelatedMoviesParams) {
  const { isVisibleAll, visibleItems, hiddenCount, handleChangeVisible } =
    useRelatedItems(movies ?? []);

  return (
    <div ref={ref}>
      {isLoading ? (
        <RelatedMoviesSkeleton className={className} />
      ) : (
        movies && (
          <div className={clsx('flex flex-col gap-6', className)}>
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl">{title}</h2>
              {hiddenCount > 0 && (
                <RelatedItemsButton
                  hiddenCount={hiddenCount}
                  isVisibleAll={isVisibleAll}
                  handleChangeVisible={handleChangeVisible}
                />
              )}
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {visibleItems.map((data) => (
                <RelatedItem key={data.filmId} {...data} />
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
});
