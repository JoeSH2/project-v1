import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../config/build/loaders/buildCssLoader';
import { buildSvgLoader } from '../config/build/loaders/buildSvgLoader';
import { BuildPaths } from '../config/build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    buildLocales: '',
    locales: '',
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts, .tsx');
  config.resolve!.alias = { '@': paths.src };
  config.resolve!.alias = { '@': path.resolve(__dirname, '..', 'src') };

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config?.module?.rules?.map((rule: RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }
  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildCssLoader(true));

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
