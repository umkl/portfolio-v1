const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "bundle.js",
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
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
        },
      },

      // {
      //   test: /\.svg$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       // options: {
      //       //   generator: (content) => svgToMiniDataURI(content.toString()),
      //       // },
      //     },
      //   ],
      // },

      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'svg-url-loader',
      //       options: {
      //         limit: 10000,
      //       },
      //     },
      //   ],
      // },
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
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist/"),
    port: 3000,
    // publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
  }
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// var path = require("path");
// // const { Template } = require('webpack');

// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   output: {
//     path: path.join(__dirname, "./dist/"),
//     filename: "bundle.js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "public/index.html"),
//       filename: index.html,
//     }),
//   ],
//   module: {
//     rules: [
//       //    test: /\.jsx$/,
//       //    exclude: /node_modules/,
//       //    loader: 'babel-loader'
//       // },
//       // {
//       //    test: /\.js$/,
//       //    exclude: /node_modules/,
//       //    loader: 'babel-loader'
//       // },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.(png|jpg|gif)$/i,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               name: "[name].[ext]",
//               outputPath: "assets",
//               publicPath: "assets",
//             },
//           },
//         ],
//       },
//       {
//         test: /\.svg$/,
//         loader: "svg-inline-loader",
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//       },
//       // {
//       //    test: /\.css$/i,
//       //    use:['style-loader', 'css-loader'],
//       // },
//       // {
//       //    test: /\.(png|j?g?|svg)$/,
//       //    use: 'file-loader'
//       // },
//       // {
//       //    test: /\.(jpg|png)$/,
//       //    use: {
//       //      loader: 'url-loader',
//       //    },
//       //  },
//     ],
//   },
//   // plugins:[
//   //    new BrowserSyncPlugin({
//   //       host: 'localhost',
//   //       port: 3000,
//   //       server:{baseDir:['public'] }
//   //    })
//   // ],
//   // devServer: {
//   //    historyApiFallback: true,
//   //    contentBase: path.join(__dirname, "dist/"),
//   //    port: 3000,
//   //    publicPath: "http://localhost:3000/dist/",
//   //    hotOnly: true
//   // },
// };
