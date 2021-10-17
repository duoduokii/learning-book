const path = require("path");

/** @type import('webpack').Configuration */
const config = {
	mode: "none",
	entry: "/Chapter01.webpack-start/src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve("Chapter01.webpack-start", "dist"),
	},
};
module.exports = config;
