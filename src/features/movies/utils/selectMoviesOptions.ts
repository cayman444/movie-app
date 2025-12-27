import type { Filters } from '@/entities/movie/types';
import type { OrderMovies } from '@/shared/api/types';

export const getYearsOptions = () => {
  return Array.from({ length: 60 }, (_, ind) => ({
    label: new Date().getFullYear() - ind,
    value: new Date().getFullYear() - ind,
  }));
};

export const getOrderOptions = (): { label: string; value: OrderMovies }[] => {
  return [
    { label: 'По оценкам', value: 'NUM_VOTE' },
    { label: 'По рейтингу', value: 'RATING' },
    { label: 'По году', value: 'YEAR' },
  ];
};

export const getCountryOptions = (filters?: Filters) => {
  return filters?.countries.map(({ country, id }) => ({
    label: country,
    value: id,
  }));
};

export const getGenreOptions = (filters?: Filters) => {
  return filters?.genres
    .filter((g) => g)
    .map(({ genre, id }) => ({
      label: genre,
      value: id,
    }));
};
