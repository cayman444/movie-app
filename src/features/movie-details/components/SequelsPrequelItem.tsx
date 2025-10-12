import type { SequelsPrequels } from '@/entities/movie/types';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const SequelsPrequelItem: FC<SequelsPrequels> = ({
  filmId,
  nameRu,
  posterUrl,
}) => {
  return (
    <li className="flex flex-col gap-4 h-full text-white">
      <Link to={`/movies/${filmId}`} className="relative pt-[150%]">
        <img
          src={posterUrl}
          alt={nameRu}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </Link>
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-lg font-semibold line-clamp-2">
          <Link to={`/movies/${filmId}`} className="!text-white">
            {nameRu}
          </Link>
        </h4>
      </div>
    </li>
  );
};
