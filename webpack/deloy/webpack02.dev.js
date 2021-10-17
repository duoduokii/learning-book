const path = require("path");

/** @type import('webpack').Configuration */
const config = {
	mode: "none",
	entry: "/Chapter02.loader/src/index.css",
	output: {
		filename: "main.js",
		path: path.resolve("Chapter02.loader", "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
module.exports = config;
