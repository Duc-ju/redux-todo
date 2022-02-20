export const addTodoAction = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const toggleCompletedTodoAction = (data) => {
  return {
    type: 'todoList/toggleCompleted',
    payload: data,
  };
};

export const changeFilterSearch = (data) => {
  return {
    type: 'filter/changeFilterSearch',
    payload: data,
  };
};

export const changeFilterCompleted = (data) => {
  return {
    type: 'filter/changeFilterCompleted',
    payload: data,
  };
};
