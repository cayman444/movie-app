import { MovieSelect } from '@/features/movies/ui';
import { getYearsOptions } from '@/features/movies/utils';
import type { PremieresMovieMonth } from '@/shared/api/types';
import type { FC } from 'react';
import { getPremieresMonthOptions } from '../utils';

interface MoviesPremieresFiltersProps {
  isFetching: boolean;
  month: PremieresMovieMonth;
  year: number;
  handleChangeMonth: (value?: PremieresMovieMonth) => void;
  handleChangeYear: (value?: number) => void;
}

export const MoviesPremieresFilters: FC<MoviesPremieresFiltersProps> = ({
  year,
  month,
  isFetching,
  handleChangeMonth,
  handleChangeYear,
}) => {
  return (
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
  );
};
