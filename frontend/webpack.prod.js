const path = require("path");
const common = require("./webpack.common")
const {merge} = require("webpack-merge")


module.exports = merge(common,{
  context: __dirname,
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "bundle.[contentHash].js",
  },
});
