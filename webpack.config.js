const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
	entry: "./client/index.js",
	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, "client/static"),
		},
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				secure: false,
				changeOrigin: true
			},
		},
	},
	devtool: "eval-source-map",
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'react/jsx-runtime': 'react/jsx-runtime.js',
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-env",
						["@babel/preset-react", { "runtime": "automatic" }]
					]
				}
			},
			{ test: /\.css$/i, use: ["style-loader", "css-loader"] },
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: ["autoprefixer"]
							}
						}
					},
					"sass-loader"
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpe?g|gif|mp4|wav|mp3|heic|pdf|ico)$/i,
				type: 'asset/resource',
			},
		]
	},
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, outputDirectory),
		clean: true,
		publicPath: '/',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./client/static/template/index.html",
			title: "Jaden Rosoff's Website",
			favicon: "./client/static/template/favicon.ico"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};