import type { Movie } from '@/entities/movie/types';
import { Tag } from 'antd';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { getFilmType } from '../utils';

export const MovieItem: FC<Movie> = ({
  kinopoiskId,
  posterUrl,
  nameRu,
  nameOriginal,
  genres,
  type,
  year,
}) => {
  return (
    <li className="flex flex-col gap-4 h-full text-white">
      <Link to={`/movies/${kinopoiskId}`} className="relative pt-[150%]">
        {year && (
          <Tag className="!absolute !top-2 !left-2 z-1 !m-0" color="#000000b3">
            {year}
          </Tag>
        )}
        {type && (
          <Tag className="!absolute !top-2 !right-2 z-1 !m-0" color="#000000b3">
            {getFilmType(type)}
          </Tag>
        )}
        <img
          src={posterUrl}
          alt={nameRu || nameOriginal}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </Link>
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-lg font-semibold line-clamp-2">
          <Link to={`/movies/${kinopoiskId}`} className="!text-white">
            {nameRu || nameOriginal}
          </Link>
        </h4>
        <div className="flex gap-2 flex-wrap">
          {genres.slice(0, 2).map(({ genre }, ind) => (
            <Tag key={ind} color="#FF0000" className="!m-0">
              {genre}
            </Tag>
          ))}
        </div>
      </div>
    </li>
  );
};
