import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleCompleted: (state, action) => {
      const toggleTodo = state.find((todo) => todo.id === action.payload);
      if (toggleTodo) toggleTodo.completed = !toggleTodo.completed;
    },
  },
});
