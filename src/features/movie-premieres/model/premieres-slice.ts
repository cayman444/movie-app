import type { PremieresMovieMonth } from '@/shared/api/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PremieresState } from './premieres-types';

const initialState: PremieresState = {
  month: 'DECEMBER',
  year: 2025,
};

export const premieresSlice = createSlice({
  name: 'premieres',
  initialState,
  reducers: {
    setMonth: (state, { payload }: PayloadAction<PremieresMovieMonth>) => {
      state.month = payload;
    },
    setYear: (state, { payload }: PayloadAction<number>) => {
      state.year = payload;
    },
  },
});

export const { setMonth, setYear } = premieresSlice.actions;

export default premieresSlice.reducer;
