const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./server/index.tsx",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "../dist"),
  },
  target: 'node',
  module: {
    rules: [
      { test: /.tsx?$/, use: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      GLOBAL_WEBPACK_VALUE: JSON.stringify("test"),
    }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
