import type { MovieCountry, MovieGenre } from '@/entities/movie/types';
import type { StaffInfoList } from '@/entities/staff/types';
import { getFilmType } from '@/features/movies/utils';
import type { TypeMovies } from '@/shared/api/types';
import { Tag } from 'antd';
import { type FC, useMemo } from 'react';
import { getAgeRating } from '../utils';

interface MovieDetailsListProps {
  type?: TypeMovies;
  year?: number;
  countries?: MovieCountry[];
  genres?: MovieGenre[];
  nameOriginal?: string;
  slogan?: string;
  ratingAgeLimits?: string;
  actors?: StaffInfoList;
  directors?: StaffInfoList;
}

export const MovieDetailsList: FC<MovieDetailsListProps> = ({
  type,
  countries,
  genres,
  nameOriginal,
  ratingAgeLimits,
  slogan,
  year,
  actors,
  directors,
}) => {
  const movieType = getFilmType(type);

  const actorsNames = useMemo(() => {
    return actors
      ?.slice(0, 3)
      .map((actor) => actor.nameRu)
      .join(', ');
  }, [actors]);

  return (
    <ul className="flex flex-col gap-1 [&_h4]:font-bold">
      <li className="flex gap-2">
        <h4>Тип: </h4>
        <div>
          {movieType.slice(0, 1).concat(movieType.slice(1).toLowerCase())}
        </div>
      </li>
      <li className="flex gap-2">
        <h4>Год выпуска: </h4>
        <div>{year}</div>
      </li>
      <li className="flex gap-2">
        <h4>Страна:</h4>
        {countries?.map(({ country }) => country).join(', ')}
      </li>
      <li className="flex gap-2">
        <h4>Жанры: </h4>
        {genres?.map(({ genre }) => genre).join(', ')}
      </li>
      {nameOriginal && (
        <li className="flex gap-2">
          <h4>Оригинальное название: </h4>
          <div>{nameOriginal}</div>
        </li>
      )}
      {slogan && (
        <li className="flex gap-2">
          <h4>Слоган: </h4>
          <div>{slogan}</div>
        </li>
      )}
      <li className="flex gap-2">
        <h4>Режиссёр:</h4>
        <a
          target="_blank"
          href={`https://www.kinopoisk.ru/name/${directors?.[0].staffId}`}
          rel="noreferrer"
        >
          {directors?.[0].nameRu}
        </a>
      </li>
      <li className="flex gap-2">
        <h4>В главных ролях:</h4>
        <div>{actorsNames}</div>
      </li>
      <li className="flex items-center gap-2">
        <h4>Возраст:</h4>
        <Tag className="!m-0 !font-medium !text-lg !bg-transparent !text-white !border-neutral-600">
          {getAgeRating(ratingAgeLimits)}
        </Tag>
      </li>
    </ul>
  );
};
