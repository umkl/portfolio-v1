const path = require("path");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
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
  // plugins:[
  //   new FlaviconsWebpackPlugin("./src/App/assets/Ungar_Website_Icon.ico"),
  // ]
};
