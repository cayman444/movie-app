import { useGetPremieresMoviesQuery } from '@/shared/api/endpoints';
import type { PremieresMovieMonth } from '@/shared/api/types';
import { useAppDispatch, useAppSelector } from '@/shared/store/store-hooks';
import { setMonth, setYear } from '../model/premieres-slice';

export const useMoviesPremieresDetails = () => {
  const { month, year } = useAppSelector((state) => state.premieres);
  const dispatch = useAppDispatch();

  const { data: premieres, isFetching } = useGetPremieresMoviesQuery({
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

  return {
    premieres,
    isFetching,
    month,
    year,
    handleChangeMonth,
    handleChangeYear,
  };
};
