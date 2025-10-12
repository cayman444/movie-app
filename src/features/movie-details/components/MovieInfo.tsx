import type { MovieDetails } from '@/entities/movie/types';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { MovieDetailsList } from './MovieDetailsList';
import { MovieMetadata } from './MovieMetadata';

interface MovieInfoProps extends ComponentProps<'div'> {
  movieInfo?: MovieDetails;
}

export const MovieInfo: FC<MovieInfoProps> = ({ movieInfo, className }) => {
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
        <MovieMetadata
          genres={movieInfo?.genres}
          filmLength={movieInfo?.filmLength}
          year={movieInfo?.year}
          ratingKinopoisk={movieInfo?.ratingKinopoisk}
        />
        <p className="mb-10">{movieInfo?.description}</p>
        <MovieDetailsList
          countries={movieInfo?.countries}
          genres={movieInfo?.genres}
          nameOriginal={movieInfo?.nameOriginal}
          ratingAgeLimits={movieInfo?.ratingAgeLimits}
          slogan={movieInfo?.slogan}
          type={movieInfo?.type}
          year={movieInfo?.year}
        />
      </div>
    </div>
  );
};
