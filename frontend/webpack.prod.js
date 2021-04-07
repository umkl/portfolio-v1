const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  context: __dirname,
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.[contentHash].js",
  },
  optimization: {
    minimizer:[
      new OptimizeCssAssetsPlugin(), new TerserPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/template.html"),
      favicon: "./src/App/assets/UNGAR_NEW_LOGO.png",
      filename: "index.html",
      minify:{
        removeAttributeQuotes: true,
        collapseWhiteSpaces: true,
        removeComments: true,
      }
    }),
  ],
});
