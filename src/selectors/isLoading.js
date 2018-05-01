import { createSelector } from "reselect";

export default createSelector(
  [
    state => state.location.type,
    state => state.location.payload,
    state => state.box,
    state => state.thread
  ],
  (type, { id }, box, thread) => {
    if (type === "BOX") return box.id !== id;
    if (type === "THREAD") return thread.id !== id;
  }
);
