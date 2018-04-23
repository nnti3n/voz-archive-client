const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

const res = p => path.resolve(__dirname, p);

// if you're specifying externals to leave unbundled, you need to tell Webpack
// to still bundle `react-universal-component`, `webpack-flush-chunks` and
// `require-universal-module` so that they know they are running
// within Webpack and can properly make connections to client modules:
const externals = fs
  .readdirSync(res("../node_modules"))
  .filter(
    x =>
      !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(
        x
      )
  )
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});

module.exports = {
  name: "server",
  target: "node",
  // devtool: 'source-map',
  devtool: "eval",
  entry: ["babel-polyfill", "fetch-everywhere", res("../server/render.js")],
  externals,
  output: {
    path: res("../buildServer"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractCssChunks.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")],
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /(\.scss|\.sass)$/,
        use: ExtractCssChunks.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 2,
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")],
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: [path.resolve(__dirname, "src", "scss")],
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: [".js", ".css"]
  },
  plugins: [
    new ExtractCssChunks(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};
