import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../api/endpoints';
import { moviesReducer } from './slices';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
