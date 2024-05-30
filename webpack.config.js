const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

console.log('ENV:', process.env.NODE_ENV);

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
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
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.DefinePlugin({
      GLOBAL_WEBPACK_VALUE: JSON.stringify("test"),
    }),
  ],
  optimization: {
    minimize: true,
    realContentHash: true,
  },
  devServer: {
    hot: true,
    port: 3000
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}