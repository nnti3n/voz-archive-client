import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { connectRoutes } from "redux-first-router";
import restoreScroll from "redux-first-router-restore-scroll";

import routesMap from "./routesMap";
import * as reducers from "./reducers";
import * as actionCreators from "./actions";

export default (history, preLoadedState) => {
  const { reducer, middleware, enhancer, thunk } = connectRoutes(
    history,
    routesMap,
    { restoreScroll: restoreScroll() }
  );

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, preLoadedState, enhancers);

  if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept("./reducers/index", () => {
      const reducers = require("./reducers/index");
      const rootReducer = combineReducers({ ...reducers, location: reducer });
      store.replaceReducer(rootReducer);
    });
  }

  return { store, thunk };
};

const composeEnhancers = (...args) =>
  typeof window !== "undefined"
    ? composeWithDevTools({ actionCreators })(...args)
    : compose(...args);
