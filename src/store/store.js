import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer,
  },
});
