const path = require('path');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output:{
      path: path.join(__dirname, '/dist/'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         // {
         //    test: /\.jsx$/,
         //    exclude: /node_modules/,
         //    loader: 'babel-loader'
         // },
         // {
         //    test: /\.js$/,
         //    exclude: /node_modules/,
         //    loader: 'babel-loader'
         // },
         {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          },
         {
            test: /\.css$/i,
            use:['style-loader', 'css-loader'],
         }
      ]
   },
   // plugins:[
   //    new BrowserSyncPlugin({
   //       host: 'localhost',
   //       port: 3000,
   //       server:{baseDir:['public'] }
   //    })
   // ],
   devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hotOnly: true
    },
   // devServer:{
   //    contentBase: __dirname + '/dist',
   //    compress: true,
   //    hot: true,
   //    port: 3000
   // },
   devtool: 'cheap-module-eval-source-map'
};
