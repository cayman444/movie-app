import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from '../api/endpoints';
import { filmsReducer } from './slices';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
