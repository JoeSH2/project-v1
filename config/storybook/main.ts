import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-webpack5',
  stories: ['../../src/**/*.stories.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../../src'],
};

export default config;

// module.exports = {
//   stories: ['../../src/**/*.stories.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm', '@storybook/addon-mdx-gfm'],
//   framework: '@storybook/react',
//   core: {
//     builder: '@storybook/builder-webpack5'
//   }
// };
