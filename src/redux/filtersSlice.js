import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
  },
  reducers: {
    changeFilterSearch: (state, action) => {
      state.search = action.payload;
    },
    changeFilterCompleted: (state, action) => {
      state.status = action.payload;
    },
  },
});
