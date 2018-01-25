import { NOT_FOUND } from "redux-first-router";

export default (state = "HOME", action = {}) =>
  components[action.type] || state;

const components = {
  HOME: "Home",
  BOX: "Box",
  THREAD: "Thread",
  [NOT_FOUND]: "NotFound"
};
