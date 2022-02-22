const initialState = [];

const todoListSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];
    case 'todoList/toggleCompleted':
      const newTodoList = state;
      newTodoList.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      return [...newTodoList];
    default:
      return state;
  }
};

export default todoListSlice;
