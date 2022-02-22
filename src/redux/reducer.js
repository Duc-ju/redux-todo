import filtersSlice from './filtersSlice';
import todoListSlice from './todoListSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filters: filtersSlice,
  todoList: todoListSlice,
});

export default rootReducer;
