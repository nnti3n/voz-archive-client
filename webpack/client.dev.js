const path = require("path");
const webpack = require("webpack");
const WriteFilePlugin = require("write-file-webpack-plugin");
const AutoDllPlugin = require("autodll-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  name: "client",
  target: "web",
  // devtool: 'source-map',
  devtool: "cheap-module-eval-source-map",
  entry: [
    "babel-polyfill",
    "fetch-everywhere",
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false",
    "react-hot-loader/patch",
    path.resolve(__dirname, "../src/index.js")
  ],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../buildClient"),
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
                importLoaders: 1,
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
    extensions: [".js", ".css", ".scss"]
  },
  plugins: [
    new WriteFilePlugin(), // used so you can see what chunks are produced in dev
    new ExtractCssChunks(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["bootstrap"], // needed to put webpack bootstrap code before chunks
      filename: "[name].js",
      minChunks: Infinity
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new AutoDllPlugin({
      context: path.join(__dirname, ".."),
      filename: "[name].js",
      entry: {
        vendor: [
          "react",
          "react-dom",
          "react-redux",
          "redux",
          "history/createBrowserHistory",
          "transition-group",
          "redux-first-router",
          "redux-first-router-link",
          "fetch-everywhere",
          "babel-polyfill",
          "redux-devtools-extension/logOnlyInProduction"
        ]
      }
    })
  ]
};
