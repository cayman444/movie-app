import type { MovieCountry, MovieGenre } from '@/entities/movie/types';
import type { StaffInfoList } from '@/entities/staff/types';
import type { TypeMovies } from '@/shared/api/types';
import { Tag } from 'antd';
import { type FC } from 'react';
import { useMovieDetailsList } from '../hooks';
import { MovieDetailsItem } from './MovieDetailsItem';
import { MovieDetailsStaff } from './MovieDetailsStaff';

export interface MovieDetailsListProps {
  type?: TypeMovies;
  year?: number;
  countries?: MovieCountry[];
  genres?: MovieGenre[];
  nameOriginal?: string;
  slogan?: string;
  ratingAgeLimits?: string;
  staffInfo?: StaffInfoList;
  movieId?: number;
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
      <MovieDetailsStaff
        title="Режиссёр:"
        profession="DIRECTOR"
        staff={directors}
        movieId={props.movieId}
      />
      <MovieDetailsStaff
        title="В главных ролях:"
        profession="ACTOR"
        staff={actors}
        movieId={props.movieId}
      />
      <MovieDetailsItem title="Возраст:" className="items-center">
        <Tag className="!m-0 !font-medium !text-lg !bg-transparent !text-white !border-neutral-600">
          {ratingAgeLimits}
        </Tag>
      </MovieDetailsItem>
    </ul>
  );
};
