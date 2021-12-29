const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		'block-test': './src/blockTest.js'
	},
	output: {
		path: path.join(__dirname, '../assets/js'),
		filename: '[name].js'
	}
}