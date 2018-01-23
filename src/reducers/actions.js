export default (state = [], action = {}) => {
  if (action.type === "@@redux/INIT" || action.type === "@@INIT") {
    return state;
  }

  return [action, ...state];
};
