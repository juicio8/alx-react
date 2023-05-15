const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
  },

  entry: path.resolve(__dirname, "js/dashboard_main.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
    }),
    // new CompressionPlugin({
    //   exclude: /\.js$/,
    //   include: /\.(png|jpg|jpeg)$/,
    //   filename: "assets/[name][ext]",
    // }),
  ],
};
