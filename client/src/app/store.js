import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/user';
import themeSlice from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware),
});
