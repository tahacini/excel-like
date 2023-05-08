import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
});

export const selectHeaders = (state) => state.header;

export default headerSlice.reducer;
