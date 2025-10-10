import { filtersReducer } from '@/features/movies/model';
import { configureStore } from '@reduxjs/toolkit';
import { moviesApi, playerApi } from '../api/endpoints';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [playerApi.reducerPath]: playerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, playerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
