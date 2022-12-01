import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../features/pagination-slice';

export const store = configureStore({
  reducer: {
    paginationCounter : paginationReducer,
  },
})