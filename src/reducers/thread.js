const initState = {
  data: []
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case "THREAD_FETCHED": {
      const { data, params } = action.payload;
      return {
        ...state,
        data,
        id: params
      };
    }
    default: {
      return state;
    }
  }
};
