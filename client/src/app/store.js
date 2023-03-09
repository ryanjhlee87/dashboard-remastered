import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/user';
import layoutSlice from '../features/layoutSlice';

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware),
});
