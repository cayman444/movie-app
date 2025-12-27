import type { MovieDetails } from '@/entities/movie/types';
import type { StaffInfoList } from '@/entities/staff/types';
import { LazyMovieImg } from '@/features/movies/ui';
import clsx from 'clsx';
import { type ComponentProps, memo } from 'react';
import { MovieInfoSkeleton } from '../ui';
import { MovieDetailsList } from './MovieDetailsList';
import { MovieMetadata } from './MovieMetadata';

interface MovieInfoProps extends ComponentProps<'div'> {
  movieInfo?: MovieDetails;
  staffInfo?: StaffInfoList;
  movieInfoLoading: boolean;
  staffInfoLoading: boolean;
}

export const MovieInfo = memo(function MovieInfo({
  movieInfo,
  staffInfo,
  movieInfoLoading,
  staffInfoLoading,
  className,
}: MovieInfoProps) {
  if (movieInfoLoading || staffInfoLoading) return <MovieInfoSkeleton />;

  return (
    <div
      className={clsx(
        className,
        'grid grid-cols-1 gap-8 md:grid-cols-[20%_1fr]'
      )}
    >
      <div className="relative pt-[280px] w-[220px] self-start md:pt-[150%] md:w-full">
        <LazyMovieImg
          src={movieInfo?.posterUrl}
          alt={movieInfo?.nameEn}
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
      <div className="max-w-3xl overflow-hidden">
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
          staffInfo={staffInfo}
          movieId={movieInfo?.kinopoiskId}
        />
      </div>
    </div>
  );
});
