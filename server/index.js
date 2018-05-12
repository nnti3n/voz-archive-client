import "babel-polyfill";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackHotServerMiddleware from "webpack-hot-server-middleware";
import clientConfig from "../webpack/client.dev";
import serverConfig from "../webpack/server.dev";
import axios from "axios";
import proxy from "http-proxy-middleware";

const DEV = process.env.NODE_ENV === "development";
const publicPath = clientConfig.output.publicPath;
const outputPath = clientConfig.output.path;
const app = express();

// API
app.get("/api/box/:boxID", async (req, res) => {
  const data = await axios.get(`/api/box/${req.params.boxID}`);
  res.json(data);
});

app.get("/api/thread/:threadID", async (req, res) => {
  const data = await axios.get(`/api/thread/${req.params.threadID}`);
  res.json(data);
});

app.get("/api/thread/:threadID/posts", async (req, res) => {
  const data = await axios.get(`/api/thread/${req.params.threadID}/posts`);
  res.json(data);
});

app.use(
  "/images/smilies/Off/",
  proxy({
    target: "https://s3-ap-southeast-1.amazonaws.com/voz-assets/voz-icons",
    changeOrigin: true,
    pathRewrite: {
      "^/images/smilies/Off": "/" // rewrite path
    }
  })
);

// UNIVERSAL HMR + STATS HANDLING GOODNESS:

if (DEV) {
  const multiCompiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = multiCompiler.compilers[0];

  app.use(
    webpackDevMiddleware(multiCompiler, {
      publicPath,
      stats: "minimal"
    })
  );
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(
    // keeps serverRender updated with arg: { clientStats, outputPath }
    webpackHotServerMiddleware(multiCompiler, {
      serverRendererOptions: { outputPath }
    })
  );
} else {
  const clientStats = require("../buildClient/stats.json"); // eslint-disable-line import/no-unresolved
  const serverRender = require("../buildServer/main.js").default; // eslint-disable-line import/no-unresolved

  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({ clientStats, outputPath }));
}

app.listen(3000, () => {
  console.log("Listening @ http://localhost:3000/");
});
