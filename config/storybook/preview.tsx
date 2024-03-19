import 'loki/configure-react';
import { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/decorators/routerDecorator';
import { styleDecorator } from '../../src/shared/config/decorators/styleDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'default',
      list: [
        { name: 'default', class: ['app', Theme.DEFAULT], color: '#00aced' },
        { name: 'dark', class: ['app', Theme.DARK], color: '#3b5998' },
        { name: 'any', class: ['app', Theme.BROWN], color: '#3b5998' },
      ],
    },
  },
  // @ts-ignore
  decorators: [RouterDecorator, styleDecorator],
};
export const parameters = {};
export default preview;
