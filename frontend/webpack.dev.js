const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	context: __dirname,
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, "dist/"),
		port: 3000,
		host: "0.0.0.0", // Bind to all available interfaces
		public: "0.0.0.0:3000", // Specify the public hostname and port
		// publicPath: "http://localhost:3000/dist/",
		hotOnly: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public/template.html"),
			favicon: "./src/App/assets/Ungar_Website_Icon.ico",
			filename: "index.html",
		}),
	],
});
