import type { PremiereMovie } from '@/entities/movie/types';
import { formatMovieTime } from '@/shared/utils';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LazyMovieImg } from '../ui';

export const MoviePremiere: FC<PremiereMovie> = ({
  premiereRu,
  nameRu,
  posterUrl,
  duration,
  genres,
  kinopoiskId,
}) => {
  const { pathname } = useLocation();

  return (
    <li className="flex gap-4 items-center">
      <Link
        to={`/movies/${kinopoiskId}`}
        state={pathname}
        className="relative w-30 h-40"
      >
        <LazyMovieImg src={posterUrl} alt={nameRu} />
      </Link>
      <Link
        to={`/movies/${kinopoiskId}`}
        className="flex flex-col gap-3 min-w-0 flex-1"
      >
        <div className="font-medium truncate">{nameRu}</div>
        <div className="flex flex-col gap-1 text-sm text-neutral-500">
          <div>{premiereRu}</div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <ClockCircleOutlined />
            {formatMovieTime(duration)}
          </div>
        </div>
        <Tag color="#FF0000" className="!inline-flex !m-0 !w-fit !flex-none">
          {genres[0].genre}
        </Tag>
      </Link>
    </li>
  );
};
