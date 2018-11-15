const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

function resolve(dir) {
	return path.join(__dirname, "..", dir);
}

module.exports = {
    mode: "development",
    devtool: '#eval-source-map',
    entry: resolve("dev_test/index.js"),
	output: {
		path: resolve("dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".vue"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
            template: resolve("dev_test/index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
        contentBase: resolve("dist"),
        host: 'localhost',
        port: 9999,
		inline: true,
		hot: true
	}
};
