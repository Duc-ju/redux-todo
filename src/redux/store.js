import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './todoListSlice';
import filtersSlice from './filtersSlice';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
