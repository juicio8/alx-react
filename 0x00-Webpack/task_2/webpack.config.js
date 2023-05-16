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

  entry: path.resolve(__dirname, "js/dashboard_main.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    // assetModuleFilename: "assets/[name][ext]",
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
          //   {
          //     loader: "file-loader",
          //     options: {
          //       name: "holberton-logo.[ext]",
          //       outputPath: "assets/",
          //     },
          //   },
          {
            loader: "image-webpack-loader",
            options: {
              name: "holberton-logo.[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
};
