import { NOT_FOUND } from "redux-first-router";
import { fetchData } from "./utils";
import * as type from "./actions/actionType";

async function fetchThread(dispatch, getState) {
  const { location: { payload: { id, currentPage } } } = getState();

  const thread = await fetchData(
    `/thread/${id}/posts?page=${currentPage ? currentPage : 1}&limit=10`
  );

  if (!thread) {
    return dispatch({ type: NOT_FOUND });
  }

  dispatch({ type: type.THREAD_FETCHED, payload: thread });
}

async function fetchBox(dispatch, getState) {
  const { location: { payload: { id, currentPage } } } = getState();

  const box = await fetchData(
    `/box/${id}?page=${currentPage ? currentPage : 1}&limit=10`
  );

  if (!box) {
    return dispatch({ type: NOT_FOUND });
  }

  dispatch({ type: type.BOX_FETCHED, payload: box });
}

export default {
  HOME: "/",
  BOX: {
    path: "/box/:id",
    thunk: fetchBox
  },
  BOX_WITH_PAGE: {
    path: "/box/:id/:currentPage",
    thunk: fetchBox
  },
  THREAD: {
    path: "/thread/:id",
    thunk: fetchThread
  },
  THREAD_WITH_PAGE: {
    path: "/thread/:id/:currentPage",
    thunk: fetchThread
  }
};
