import type { FiltersItem } from '@/entities/movie/types';

export interface FiltersState {
  movies: FiltersItem;
  serials: FiltersItem;
  animations: FiltersItem;
}

export interface FilterParams {
  type: keyof FiltersState;
  filter: keyof FiltersItem;
  value: FiltersItem[keyof FiltersItem];
}
