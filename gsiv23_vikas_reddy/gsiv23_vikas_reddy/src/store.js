import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './API/apiSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;
