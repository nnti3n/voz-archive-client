import { createSelector } from "reselect";

export default createSelector(
  [
    state => state.location.type,
    state => state.location.payload,
    state => state.box,
    state => state.thread
  ],
  (type, { id }, box, thread) => {
    if (type === "BOX" || type === "BOX_WITH_PAGE")
      return box.data.length === 0;
    if (type === "THREAD_WITH_PAGE" || type === "THREAD")
      return thread.data.posts.length === 0;
  }
);
