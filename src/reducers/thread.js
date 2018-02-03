const initState = {
  data: [],
  id: 0,
  page: 1,
  currentPage: 1
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case "THREAD_FETCHED": {
      const { data, params, page } = action.payload;
      return {
        ...state,
        data,
        id: params,
        page
      };
    }
    default: {
      return state;
    }
  }
};
