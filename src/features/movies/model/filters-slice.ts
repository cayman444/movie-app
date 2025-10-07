import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { isOrderMovies } from './filters-guards';
import type { FilterParams, FiltersState } from './filters-types';

const initialState: FiltersState = {
  movies: { page: 1, type: 'FILM', order: 'NUM_VOTE' },
  animations: { page: 1, genreId: 33, order: 'NUM_VOTE' },
  serials: { page: 1, type: 'TV_SHOW', order: 'NUM_VOTE' },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (
      state,
      { payload: { type, filter, value } }: PayloadAction<FilterParams>
    ) => {
      const entity = state[type];

      if (
        filter === 'countryId' &&
        (typeof value === 'number' || typeof value === 'undefined')
      ) {
        entity.countryId = value;
      } else if (filter === 'genreId' && typeof value === 'number') {
        entity.genreId = value;
      } else if (
        filter === 'order' &&
        (isOrderMovies(value) || typeof value === 'undefined')
      ) {
        entity.order = value;
      } else if (
        filter === 'year' &&
        (typeof value === 'number' || typeof value === 'undefined')
      ) {
        entity.year = value;
      }
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
