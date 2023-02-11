import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            },
          ],
        ],
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: Boolean((resPath: string) => resPath.includes('.module.')),
            localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoader];
};
