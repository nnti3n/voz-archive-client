export default (state = "", action = {}) =>
  action.type === "BOX" ? action.payload.id : state;
