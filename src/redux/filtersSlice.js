const initialState = {
  search: '',
  status: 'All',
};

const filtersSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/changeFilterSearch':
      return {
        ...state,
        search: action.payload,
      };
    case 'filter/changeFilterCompleted':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default filtersSlice;
