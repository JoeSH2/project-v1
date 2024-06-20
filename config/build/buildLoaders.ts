import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;
  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpg|jpe|gif)$/i,
    use: [{ loader: 'file-loader' }],
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

  const scssLoader = buildCssLoader(isDev);

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, scssLoader];
};
