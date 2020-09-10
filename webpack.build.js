var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][chunkhash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf|eot|otf|woff|woff2)$/,
        loader: "url-loader?limit=10000",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name][chunkhash:8].css" }),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "index.html",
      template: "./index.html",
    }),
  ],
};