import type { VisibleMovie } from '@/entities/movie/types';
import { LazyMovieImg } from '@/features/movies/ui';
import { type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const VisibleItem: FC<VisibleMovie> = ({
  filmId,
  nameRu,
  posterUrl,
}) => {
  const { state } = useLocation();

  return (
    <li className="flex flex-col gap-4 h-full text-white">
      <Link
        to={`/movies/${filmId}`}
        state={state}
        className="relative pt-[150%]"
      >
        <LazyMovieImg src={posterUrl} alt={nameRu} />
      </Link>
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-lg font-semibold line-clamp-2">
          <Link to={`/movies/${filmId}`} state={state} className="!text-white">
            {nameRu}
          </Link>
        </h4>
      </div>
    </li>
  );
};
