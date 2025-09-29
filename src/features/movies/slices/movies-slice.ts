import { createSlice } from '@reduxjs/toolkit';

interface MoviesState {
  value: number;
}

const initialState: MoviesState = {
  value: 0,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

// export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
