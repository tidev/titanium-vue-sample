'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateAppJsPlugin, titaniumTarget } = require('webpack-target-titanium');
const { VueLoaderPlugin } = require('vue-loader');
const titaniumCompiler = require('titanium-vue-template-compiler');

const projectRootDirectory = path.resolve('..');
const outputDirectory = path.join(projectRootDirectory, 'Resources');

module.exports = env => {
	const config = {
		context: __dirname,
		target: titaniumTarget,
		mode: env && env.production ? 'production' : 'development',
		entry: {
			bundle:'./src/main.js',
		},
		output: {
			pathinfo: true,
			path: outputDirectory,
			libraryTarget: 'commonjs2',
			filename: '[name].js',
		},
		/*
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						enforce: true,
						chunks: 'all'
					}
				}
			}
		},
		*/
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						compiler: titaniumCompiler
					}
				},
				{
					test: /\.css$/,
					loader: 'null-loader'
				}
			]
		},
		resolve: {
			extensions: ['.js', '.scss', '.css'],
			symlinks: false
		},
		resolveLoader: {
			symlinks: false
		},
		node: {
			fs: 'empty',
			global: false
		},
		plugins: [
			new CleanWebpackPlugin(
				[
					path.join(outputDirectory, '*.*'),
					path.join(projectRootDirectory, 'platform')
				],
				{
					allowExternal: true
				}
			),
			/*
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			}),
			*/
			new CopyWebpackPlugin([
				{ context: 'assets', from: '**/*' },
				{ from: 'platform/**/*', to: '..' }
			]),
			new GenerateAppJsPlugin([
				//'vendors',
				'bundle'
			]),
			new VueLoaderPlugin()
		]
	};

	if (env && !env.production) {
		//config.plugins.push(new WatchStateNotifierPlugin());
	}

	return config;
};
