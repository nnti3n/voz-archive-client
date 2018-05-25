import React from "react";
import ReactDOM from "react-dom/server";
import { Provider } from "react-redux";
import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";
import configureStore from "./configureStore";
import App from "../src/components/App";

export default ({ clientStats }) => async (req, res) => {
  const store = await configureStore(req, res);
  if (!store) return; // no store means redirect was already served

  const app = createApp(App, store);
  const appString = ReactDOM.renderToString(app);
  const stateJson = JSON.stringify(store.getState());
  const { title } = store.getState();
  const chunkNames = flushChunkNames();
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });
  const ga = `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116653642-2"></script>
          <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-116653642-2');
          </script>`;

  console.log("REQUESTED PATH:", req.path);
  console.log("CHUNK NAMES", chunkNames);

  return res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>${title}</title> 
          ${styles}
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root">${appString}</div>
          ${cssHash}
          <script type='text/javascript' src='/static/vendor.js'></script>
          ${js}
          <!-- Global site tag (gtag.js) - Google Analytics -->
          ${process.env.NODE_ENV === "production" ? ga : ""}
        </body>
      </html>`
  );
};

const createApp = (App, store) => (
  <Provider store={store}>
    <App />
  </Provider>
);
