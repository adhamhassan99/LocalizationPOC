import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  direction: 'ltr',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleDirection: state => {
      state.direction = state.direction === 'ltr' ? 'rtl' : 'ltr';
    },
  },
});

export const {toggleDirection} = languageSlice.actions;

export default languageSlice.reducer;
