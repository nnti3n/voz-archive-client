import { NOT_FOUND } from "redux-first-router";
import { fetchData } from "./utils";
import * as type from "./actions/actionType";

export default {
  HOME: "/",
  BOX: {
    path: "/box/:id",
    thunk: async (dispatch, getState) => {
      const { location: { payload: { id } } } = getState();

      const box = await fetchData(`/api/box/${id}`);

      if (!box) {
        return dispatch({ type: NOT_FOUND });
      }

      dispatch({ type: type.BOX_FETCHED, payload: box });
    }
  },
  THREAD: {
    path: "/thread/:id",
    thunk: async (dispatch, getState) => {
      const { location: { payload: { id, page } } } = getState();
      console.log(page);

      const thread = await fetchData(
        `/api/thread/${id}/posts?page=${page ? page : 1}&limit=10`
      );

      if (!thread) {
        return dispatch({ type: NOT_FOUND });
      }

      dispatch({ type: type.THREAD_FETCHED, payload: thread });
    }
  }
};
