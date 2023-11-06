import { BuildOptions } from '../types/config';
import babelRemoveIdentifier from '../babelPlugin/babelRemoveIdentifier';

interface BuildBabelLoaderProps extends BuildOptions {
  isTSX?: boolean;
}

export const buildBabelLoader = ({ isTSX, isDev }: BuildBabelLoaderProps) => ({
  test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    // loader: 'babelPlugin-loader',
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
        [
          '@babel/plugin-transform-typescript',
          {
            isTSX,
          },
        ],
        '@babel/plugin-transform-runtime',
        isTSX && [
          babelRemoveIdentifier,
          {
            props: ['data-testid'],
          },
        ],
      ].filter(Boolean),
    },
  },
});
