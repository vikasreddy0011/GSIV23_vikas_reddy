import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiSlice.actions;

export default apiSlice.reducer;
