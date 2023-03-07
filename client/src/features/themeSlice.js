import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    getCurrentTheme: state => {
      return state.isDarkMode;
    },
  },
});

export const { getCurrentTheme } = themeSlice;

export default themeSlice.reducer;
