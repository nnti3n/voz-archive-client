import { NOT_FOUND } from "redux-first-router";

// try dispatching these from the redux devTools

export const goHome = () => ({
  type: "HOME"
});

export const notFound = () => ({
  type: NOT_FOUND
});

export const visitBox = boxID => ({
  type: "LIST",
  payload: { boxID }
});

export const visitVideo = slug => ({
  type: "VIDEO",
  payload: { slug }
});
