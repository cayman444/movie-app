import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { isOrderMovies } from './filters-guards';
import type { FilterParams, FiltersState } from './filters-types';

const initialState: FiltersState = {
  movies: { page: 1, type: 'FILM', order: 'NUM_VOTE' },
  animations: { page: 1, type: 'FILM', genreId: 18, order: 'NUM_VOTE' },
  serials: { page: 1, type: 'TV_SERIES', order: 'NUM_VOTE' },
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
      } else if (
        filter === 'genreId' &&
        (typeof value === 'number' || typeof value === 'undefined')
      ) {
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
      } else if (filter === 'page' && typeof value === 'number') {
        entity.page = value;
      } else if (filter === 'search' && typeof value === 'string') {
        entity.search = value;
      }
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
