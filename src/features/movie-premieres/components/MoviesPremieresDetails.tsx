import { Container } from '@/app/layouts';
import { MovieSelect, MoviesListSkeleton } from '@/features/movies/ui';
import { getYearsOptions } from '@/features/movies/utils';
import { useGetPremieresMoviesQuery } from '@/shared/api/endpoints';
import type { PremieresMovieMonth } from '@/shared/api/types';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { setMonth, setYear } from '../model/premieres-slice';
import { getPremieresMonthOptions } from '../utils';
import { MoviePremiereDetails } from './MoviePremiereDetails';

export const MoviesPremieresDetails = () => {
  const { month, year } = useAppSelector((state) => state.premieres);
  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetPremieresMoviesQuery({
    month,
    year,
  });

  const handleChangeMonth = (value?: PremieresMovieMonth) => {
    if (value) {
      dispatch(setMonth(value));
    }
  };

  const handleChangeYear = (value?: number) => {
    if (value) {
      dispatch(setYear(value));
    }
  };

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <h1 className="text-2xl font-bold mb-6">Кинопремьеры</h1>
      <div className="flex gap-2 mb-8">
        <MovieSelect
          isFetching={isFetching}
          placeholder="Месяц"
          defaultValue={month}
          options={getPremieresMonthOptions()}
          allowClear={false}
          onChange={handleChangeMonth}
        />
        <MovieSelect
          isFetching={isFetching}
          placeholder="Год"
          defaultValue={year}
          options={getYearsOptions()}
          allowClear={false}
          onChange={handleChangeYear}
        />
      </div>
      {isFetching ? (
        <MoviesListSkeleton hasPagination={false} />
      ) : (
        <ul className="grid grid-cols-5 gap-x-4 gap-y-8">
          {data?.items.map((movie) => (
            <MoviePremiereDetails key={movie.kinopoiskId} {...movie} />
          ))}
        </ul>
      )}
    </Container>
  );
};
