const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options:{
            name: "[name].[hash].[ext]",
            outputPath:"imgs"
          }
        },
      },
      {
        test:/\.svg$/,
        use: ['@svgr/webpack']
      },
        
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
