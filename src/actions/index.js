import { NOT_FOUND } from "redux-first-router";

// try dispatching these from the redux devTools

export const goToPage = (type, id) => ({
  type,
  payload: id && { id }
});

export const goHome = () => ({
  type: "HOME"
});

export const notFound = () => ({
  type: NOT_FOUND
});

export const visitBoxPage = (id, currentPage = 1) => ({
  type: "BOX_WITH_PAGE",
  payload: { id, currentPage }
});

export const visitThreadPage = (id, currentPage = 1) => ({
  type: "THREAD_WITH_PAGE",
  payload: { id, currentPage }
});
