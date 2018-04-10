import { NOT_FOUND } from "redux-first-router";

export default (state = "HOME", action = {}) =>
  components[action.type] || state;

const components = {
  HOME: "Box",
  BOX: "Box",
  BOX_WITH_PAGE: "Box",
  THREAD: "Thread",
  THREAD_WITH_PAGE: "Thread",
  [NOT_FOUND]: "NotFound"
};
