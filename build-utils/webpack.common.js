const path = require('path');
//old
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
//old

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//clean up here later.
const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')


module.exports = {
	// entry: path.resolve(__dirname, './src/index.js'),
	entry: path.resolve(__dirname, '..', './src/index.js'),
	output: {
		path: path.resolve(__dirname,'..',  './dist'),
		filename: 'bundle.js',
		publicPath: '',
		//this line creates folders in the structure, but they are not used by the actual html
		// assetModuleFilename: 'src/assets/images/[name].[ext]',
		clean: true,
	},
	devServer: {
		static: path.resolve(__dirname, '..', './src/index.html'),
		compress: true,
		port: 9000,
	},
	module: {
		rules: [

			//This scss parser work
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},

			//This is the html loader
			// {
			// 	test: /\.html$/,
			// 	use: [{
			// 		loader: "html-loader",
			// 		options: {
			// 			esModule: false,
			// 		}
			// 	}],
			//   },


			//This is a way to force images to load
			//   {
			// 	test: /\.(svg|png|jpg|gif)$/,
			// 	use: [{
			// 	  loader: "file-loader",
			// 	  options: {
			// 		name: '[name].[hash].[ext]',
			// 		publicPath: 'assets',
			// 		outputPath: 'assets/img',
			// 		esModule: false
			// 	  }
			// 	}]
			// }

			//This is a way to webpack5 load images structures
			// {
			// 	test: /\.(svg|png|jpg|gif)$/,
			// 	type: 'asset/resource'
			// }
			],
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	// template: path.resolve(__dirname, '..', './src/index.html'),
		// 	template: './src/index.html',
		// 	filename: 'index.html',
		// 	favicon: "./src/static/favicon.ico",
		// 	title: "Teletubbies"
		// }),
		new FileIncludeWebpackPlugin({
			source: './src',
			replace: [{
			  regex: /\[\[FILE_VERSION]]/g,
			  to: 'v=1.0.0',
			}],
		  }),
		new MiniCssExtractPlugin(),

		//alternative: https://webpack.js.org/loaders/html-loader/#export-into-html-files
		new CopyWebpackPlugin({'patterns': [
			{from:'./src/static/images', to:'./static/images'}
		]}),
	],
};