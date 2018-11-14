const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

function resolve(dir) {
	return path.join(__dirname, "..", dir);
}

module.exports = {
	mode: "production",
	entry: resolve("src/index.js"),
	output: {
		path: resolve("dist"),
		filename: "vue-marquee-cmpt.js"
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
	plugins: [new VueLoaderPlugin()]
};
