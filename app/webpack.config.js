'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateAppJsPlugin, PlatformAwareFileSystemPlugin, titaniumTarget } = require('webpack-target-titanium');
const { VueLoaderPlugin } = require('vue-loader');
const titaniumCompiler = require('titanium-vue-template-compiler');
const webpack = require('webpack');

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
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					include: [path.join(__dirname, 'src')]
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
			alias: {
				'@components': path.join(__dirname, 'src', 'components'),
				'@modules': path.join(__dirname, 'src', 'modules')
			},
			extensions: ['.js', '.scss', '.css', '.vue'],
			symlinks: false
		},
		node: {
			fs: 'empty',
			global: false,
			setImmediate: false
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
			new webpack.DefinePlugin({
				'process.env.TARGET_PLATFORM': JSON.stringify(env.targetPlatform)
			}),
			new CopyWebpackPlugin([
				{ context: 'assets', from: '**/*' },
				{ from: 'platform/**/*', to: '..' }
			]),
			new GenerateAppJsPlugin([
				'bundle'
			]),
			new PlatformAwareFileSystemPlugin({ platform: env.targetPlatform }),
			new VueLoaderPlugin()
		]
	};

	if (env && !env.production) {
		//config.plugins.push(new WatchStateNotifierPlugin());
	}

	process.env.TARGET_PLATFORM = env.targetPlatform;

	return config;
};
