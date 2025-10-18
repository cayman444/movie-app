import type { MovieCountry, MovieGenre } from '@/entities/movie/types';
import type { StaffInfoList } from '@/entities/staff/types';
import type { TypeMovies } from '@/shared/api/types';
import { Tag } from 'antd';
import { type FC } from 'react';
import { useMovieDetailsList } from '../hooks';
import { MovieDetailsItem } from './MovieDetailsItem';
import { MovieDetailsLink } from './MovieDetailsLink';

export interface MovieDetailsListProps {
  type?: TypeMovies;
  year?: number;
  countries?: MovieCountry[];
  genres?: MovieGenre[];
  nameOriginal?: string;
  slogan?: string;
  ratingAgeLimits?: string;
  staffInfo?: StaffInfoList;
}

export const MovieDetailsList: FC<MovieDetailsListProps> = (props) => {
  const {
    movieType,
    year,
    countries,
    genres,
    nameOriginal,
    slogan,
    ratingAgeLimits,
    actors,
    directors,
  } = useMovieDetailsList(props);

  return (
    <ul className="flex flex-col gap-1">
      <MovieDetailsItem title="Тип:">{movieType}</MovieDetailsItem>
      <MovieDetailsItem title="Год выпуска:">{year}</MovieDetailsItem>
      <MovieDetailsItem title="Страна:">{countries}</MovieDetailsItem>
      <MovieDetailsItem title="Жанры:">{genres}</MovieDetailsItem>
      {nameOriginal && (
        <MovieDetailsItem title="Оригинальное название:">
          {nameOriginal}
        </MovieDetailsItem>
      )}
      {slogan && <MovieDetailsItem title="Слоган:">{slogan}</MovieDetailsItem>}
      <MovieDetailsLink
        title="Режиссёр:"
        href={`https://www.kinopoisk.ru/name/${directors?.[0].staffId}`}
      >
        {directors?.[0].nameRu}
      </MovieDetailsLink>
      <MovieDetailsLink
        title="В главных ролях:"
        href={`https://www.kinopoisk.ru/name/${actors?.[0].staffId}`}
      >
        {actors?.[0].nameRu}
      </MovieDetailsLink>
      <MovieDetailsItem title="Возраст:" className="items-center">
        <Tag className="!m-0 !font-medium !text-lg !bg-transparent !text-white !border-neutral-600">
          {ratingAgeLimits}
        </Tag>
      </MovieDetailsItem>
    </ul>
  );
};
