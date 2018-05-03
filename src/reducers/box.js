const initState = {
  data: [],
  id: 0,
  page: 1,
  currentPage: 1
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case "BOX_FETCHED": {
      const { data, params, page } = action.payload;
      return {
        ...state,
        data,
        id: params,
        page
      };
    }
    case "BOX": {
      return {
        ...state,
        data: initState.data,
        currentPage: 1
      };
    }
    case "BOX_WITH_PAGE": {
      const { currentPage } = action.payload;
      return {
        ...state,
        data: initState.data,
        currentPage
      };
    }
    case "THREAD_FETCHED": {
      const { thread } = action.payload.data;
      return {
        ...state,
        id: thread.BoxID
      };
    }
    default: {
      return state;
    }
  }
};
