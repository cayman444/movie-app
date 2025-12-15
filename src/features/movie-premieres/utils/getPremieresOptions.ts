import type { PremieresMovieMonth } from '@/shared/api/types';

export const getPremieresMonthOptions = (): {
  label: string;
  value: PremieresMovieMonth;
}[] => {
  return [
    { label: 'Январь', value: 'JANUARY' },
    { label: 'Февраль', value: 'FEBRUARY' },
    { label: 'Март', value: 'MARCH' },
    { label: 'Апрель', value: 'APRIL' },
    { label: 'Май', value: 'MAY' },
    { label: 'Июнь', value: 'JUNE' },
    { label: 'Июль', value: 'JULY' },
    { label: 'Август', value: 'AUGUST' },
    { label: 'Сентябрь', value: 'SEPTEMBER' },
    { label: 'Октябрь', value: 'OCTOBER' },
    { label: 'Ноябрь', value: 'NOVEMBER' },
    { label: 'Декабрь', value: 'DECEMBER' },
  ];
};
