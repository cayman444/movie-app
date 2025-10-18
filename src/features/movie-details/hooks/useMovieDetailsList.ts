import { getFilmType } from '@/features/movies/utils';
import { useMemo } from 'react';
import type { MovieDetailsListProps } from '../components/MovieDetailsList';
import { getAgeRating } from '../utils';

export const useMovieDetailsList = ({
  type,
  year,
  countries,
  genres,
  nameOriginal,
  slogan,
  ratingAgeLimits,
  staffInfo,
}: MovieDetailsListProps) => {
  const movieType = getFilmType(type);

  const formattedMovieType = movieType
    .slice(0, 1)
    .concat(movieType.slice(1).toLowerCase());

  const formattedCountries = useMemo(() => {
    return countries?.map(({ country }) => country).join(', ');
  }, [countries]);

  const formattedGenres = useMemo(() => {
    return genres?.map(({ genre }) => genre).join(', ');
  }, [genres]);

  const formattedRatingAgeLimits = getAgeRating(ratingAgeLimits);

  const actors = useMemo(
    () => staffInfo?.filter((staff) => staff.professionKey === 'ACTOR'),
    [staffInfo]
  );

  const directors = useMemo(
    () => staffInfo?.filter((staff) => staff.professionKey === 'DIRECTOR'),
    [staffInfo]
  );

  return {
    movieType: formattedMovieType,
    year,
    countries: formattedCountries,
    genres: formattedGenres,
    nameOriginal,
    slogan,
    ratingAgeLimits: formattedRatingAgeLimits,
    actors,
    directors,
  };
};
