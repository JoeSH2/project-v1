import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugin = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugin.push(
      new ReactRefreshPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugin;
}
