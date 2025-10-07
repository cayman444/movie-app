import type { Filters } from '@/entities/movie/types';

export const getYearsOptions = () => {
  return Array.from({ length: 60 }, (_, ind) => ({
    label: new Date().getFullYear() - ind,
    value: new Date().getFullYear() - ind,
  }));
};

export const getOrderOptions = () => {
  return [
    { label: 'По оценкам', value: 'По оценкам' },
    { label: 'По рейтингу', value: 'По рейтингу' },
    { label: 'По году', value: 'По году' },
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
    .map((g) => ({
      label: g.genre,
      value: g.genre,
    }));
};
