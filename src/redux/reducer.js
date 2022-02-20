const initialState = {
  filters: {
    search: '',
    status: 'All',
  },
  todoList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case 'todoList/toggleCompleted':
      const newTodoList = state.todoList;
      newTodoList.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      return {
        ...state,
        todoList: [...newTodoList],
      };
    case 'filter/changeFilterSearch':
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    case 'filter/changeFilterCompleted':
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
