import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/slice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
