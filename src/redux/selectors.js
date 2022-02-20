import { createSelector } from 'reselect';
export const todoListSelector = (state) => state.todoList;
export const filterSelector = (state) => state.filters;

export const todoRemainingSelectior = createSelector(
  todoListSelector,
  filterSelector,
  (todoList, filters) => {
    return todoList.filter((todo) => {
      if (filters.status === 'All') {
        return todo.name.includes(filters.search);
      } else {
        return (
          todo.name.includes(filters.search) &&
          todo.completed === (filters.status === 'Completed')
        );
      }
    });
  }
);
