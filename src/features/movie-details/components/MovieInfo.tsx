import type { MovieDetails } from '@/entities/movie/types';
import { getFilmType } from '@/features/movies/utils';
import { formatMovieTime } from '@/shared/utils';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { getAgeRating } from '../utils';

interface MovieInfoProps extends ComponentProps<'div'> {
  movieInfo?: MovieDetails;
}

export const MovieInfo: FC<MovieInfoProps> = ({ movieInfo, className }) => {
  const movieType = getFilmType(movieInfo?.type);

  return (
    <div className={clsx(className, 'grid grid-cols-[20%_1fr] gap-8')}>
      <div className="relative pt-[150%] self-start">
        <img
          src={movieInfo?.posterUrl}
          alt={movieInfo?.nameEn}
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
      <div>
        <h2 className="font-bold text-4xl mb-10">{movieInfo?.nameRu}</h2>
        <div className="flex items-center gap-4 font-medium mb-6">
          <div className="flex items-center gap-2">
            {movieInfo?.genres.map(({ genre }) => (
              <Tag
                key={genre}
                color="red-inverse"
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
        <ul className="flex flex-col gap-1 [&_h4]:font-bold">
          <li className="flex gap-2">
            <h4>Тип: </h4>
            <div>
              {movieType.slice(0, 1).concat(movieType.slice(1).toLowerCase())}
            </div>
          </li>
          <li className="flex gap-2">
            <h4>Год выпуска: </h4>
            <div>{movieInfo?.year}</div>
          </li>
          <li className="flex gap-2">
            <h4>Страна:</h4>
            {movieInfo?.countries.map(({ country }) => country).join(', ')}
          </li>
          <li className="flex gap-2">
            <h4>Жанры: </h4>
            {movieInfo?.genres.map(({ genre }) => genre).join(', ')}
          </li>
          {movieInfo?.nameOriginal && (
            <li className="flex gap-2">
              <h4>Оригинальное название: </h4>
              <div>{movieInfo?.nameOriginal}</div>
            </li>
          )}
          {movieInfo?.slogan && (
            <li className="flex gap-2">
              <h4>Слоган: </h4>
              <div>{movieInfo?.slogan}</div>
            </li>
          )}
          <li className="flex items-center gap-2">
            <h4>Возраст:</h4>
            <Tag className="!m-0 !font-medium !text-lg !bg-transparent !text-white !border-neutral-600">
              {getAgeRating(movieInfo?.ratingAgeLimits)}
            </Tag>
          </li>
        </ul>
      </div>
    </div>
  );
};
