const initState = {
  data: []
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case "BOX_FETCHED": {
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
