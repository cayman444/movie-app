import type { MovieDetails } from '@/entities/movie/types';
import { getFilmType } from '@/features/movies/utils';
import { formatMovieTime } from '@/shared/utils';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';
import type { FC } from 'react';

interface MovieInfoProps {
  movieInfo?: MovieDetails;
}

export const MovieInfo: FC<MovieInfoProps> = ({ movieInfo }) => {
  const movieType = getFilmType(movieInfo?.type);

  return (
    <div className="grid grid-cols-[20%_1fr] gap-8">
      <div className="relative pt-[150%] self-start">
        <img
          src={movieInfo?.posterUrl}
          alt={movieInfo?.nameEn}
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-4xl mb-10">{movieInfo?.nameRu}</h2>
        <div className="flex items-center gap-4 font-medium mb-6">
          <div className="flex items-center gap-2">
            {movieInfo?.genres.map(({ genre }) => (
              <Tag
                key={genre}
                color="#FF0000"
                className="!m-0 !font-semibold !inline-flex !w-fit"
              >
                {genre}
              </Tag>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <CalendarOutlined />
            <div className="font-semibold">{movieInfo?.year}</div>
          </div>
          {movieInfo?.filmLength && (
            <div className="flex items-center gap-2">
              <ClockCircleOutlined />
              <div className="font-semibold">
                {formatMovieTime(movieInfo?.filmLength)}
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <StarOutlined />
            <div className="font-semibold">{movieInfo?.ratingKinopoisk}</div>
          </div>
        </div>
        <p className="mb-10">{movieInfo?.description}</p>
        <ul>
          <li className="flex gap-1">
            <h4>Тип: </h4>
            <div>
              {movieType.slice(0, 1).concat(movieType.slice(1).toLowerCase())}
            </div>
          </li>
          <li className="flex gap-1">
            <h4>Дата релиза: </h4>
            <div>{movieInfo?.year}</div>
          </li>
          <li className="flex gap-1">
            <h4>Страна:</h4>
            <ul>
              <li>
                {movieInfo?.countries.map(({ country }) => country).join(', ')}
              </li>
            </ul>
          </li>
          <li className="flex gap-1">
            <h4>Жанры: </h4>
            <ul className="flex gap-1">
              <li>{movieInfo?.genres.map(({ genre }) => genre).join(', ')}</li>
            </ul>
          </li>
          <li className="flex gap-1">
            <h4>Оригинальное название: </h4>
            <div>{movieInfo?.nameOriginal}</div>
          </li>
          <li className="flex gap-1">
            <h4>Слоган: </h4>
            <div>{movieInfo?.slogan}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
