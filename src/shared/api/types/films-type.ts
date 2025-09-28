type AvailableMonth =
  | 'JANUARY'
  | 'FEBRUARY'
  | 'MARCH'
  | 'APRIL'
  | 'MAY'
  | 'JUNE'
  | 'JULY'
  | 'AUGUST'
  | 'SEPTEMBER'
  | 'OCTOBER'
  | 'NOVEMBER'
  | 'DECEMBER';

export interface PremieresFilmsParams {
  year: number;
  month: AvailableMonth;
}
