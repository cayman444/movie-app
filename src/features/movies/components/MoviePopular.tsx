import type { CollectionMovie } from '@/entities/movie/types';
import { Tag } from 'antd';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const MoviePopular: FC<CollectionMovie> = ({
  kinopoiskId,
  nameRu,
  posterUrl,
  genres,
}) => {
  return (
    <li className="flex flex-col gap-4 h-full text-white">
      <Link to={`movie/${kinopoiskId}`} className="relative pt-[150%]">
        <img
          src={posterUrl}
          alt={nameRu}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </Link>
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-lg font-semibold line-clamp-2">
          <Link to={`movie/${kinopoiskId}`} className="!text-white">
            {nameRu}
          </Link>
        </h4>
        <div className="flex gap-2 flex-wrap">
          {genres.map(({ genre }, ind) => (
            <Tag key={ind} color="#FF0000" className="!m-0">
              {genre}
            </Tag>
          ))}
        </div>
      </div>
    </li>
  );
};
