export default (state = "", action = {}) =>
  action.type === "THREAD" ? action.payload.id : state;
