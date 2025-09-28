import { createSlice } from '@reduxjs/toolkit';

interface FilmsState {
  value: number;
}

const initialState: FilmsState = {
  value: 0,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
});

// export const {} = filmsSlice.actions;

export default filmsSlice.reducer;
