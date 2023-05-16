const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
  },

  entry: {
    header: path.resolve(__dirname, "./modules/header/header.js"),
    body: path.resolve(__dirname, "./modules/body/body.js"),
    footer: path.resolve(__dirname, "./modules/footer/footer.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    // assetModuleFilename: "assets/[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    contentBase: "./public",
    port: 8564,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "holberton-logo.[ext]",
              outputPath: "assets/",
            },
          },
          {
            loader: "image-webpack-loader",
            // options: {
            //   name: "holberton-logo.[ext]",
            //   outputPath: "assets/",
            // },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
    }),
  ],
};
