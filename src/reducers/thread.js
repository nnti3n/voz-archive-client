const initState = {
  data: {
    thread: {},
    posts: []
  },
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
    case "THREAD": {
      return {
        ...state,
        data: initState.data,
        currentPage: 1
      };
    }
    case "THREAD_WITH_PAGE": {
      const { currentPage } = action.payload;
      return {
        ...state,
        data: initState.data,
        currentPage
      };
    }
    default: {
      return state;
    }
  }
};
