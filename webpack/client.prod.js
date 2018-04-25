const path = require("path");
const webpack = require("webpack");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const StatsPlugin = require("stats-webpack-plugin");
const AutoDllPlugin = require("autodll-webpack-plugin");

module.exports = {
  name: "client",
  target: "web",
  devtool: "source-map",
  entry: [
    "babel-polyfill",
    "fetch-everywhere",
    path.resolve(__dirname, "../src/index.js")
  ],
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
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
        test: /(\.css|\.scss|\.sass)$/,
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
    extensions: [".js", ".css"]
  },
  plugins: [
    new StatsPlugin("stats.json"),
    new ExtractCssChunks(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["bootstrap"], // needed to put webpack bootstrap code before chunks
      filename: "[name].[chunkhash].js",
      minChunks: Infinity
    }),

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        API: JSON.stringify("http://api.vozarchive.me")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        screw_ie8: true,
        comments: false
      },
      sourceMap: true
    }),
    new webpack.HashedModuleIdsPlugin(), // not needed for strategy to work (just good practice)
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
      },
      plugins: [
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production"),
            API: JSON.stringify("http://api.vozarchive.me")
          }
        }),

        new webpack.optimize.UglifyJsPlugin({
          compress: {
            screw_ie8: true,
            warnings: false
          },
          mangle: {
            screw_ie8: true
          },
          output: {
            screw_ie8: true,
            comments: false
          },
          sourceMap: true
        })
      ]
    })
  ]
};
