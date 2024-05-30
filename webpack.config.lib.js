const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/mylib.ts",
  output: {
    filename: "lib.js",
    path: path.resolve(__dirname, "dist/lib"),
    library: ['TestLibrary'],
  },
  module: {
    rules: [
      { test: /.tsx?$/, use: "ts-loader" },
    ]
  },
  optimization: {
    minimize: true,
    realContentHash: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}