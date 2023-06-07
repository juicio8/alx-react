const path = require("path");

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
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    port: 8564,
  },
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    // assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
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
};
