import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import AppContainer from "react-hot-loader/lib/AppContainer";
import App from "./components/App";
import configureStore from "./configureStore";

const history = createHistory();
const { store } = configureStore(history, window.REDUX_STATE);

if (typeof document !== "undefined") {
  setTimeout(() => {
    let prevTitle = document.title;

    store.subscribe(() => {
      const title = store.getState().title;
      if (prevTitle !== title) {
        document.title = title;
        prevTitle = title;
      }
    });
  });
}

const render = App => {
  const root = document.getElementById("root");

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./components/App", () => {
    // eslint-disable-next-line
    const App = require("./components/App").default;

    render(App);
  });
}
