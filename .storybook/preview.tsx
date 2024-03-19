import 'loki/configure-react';
import { Preview } from '@storybook/react';
import { RouterDecorator } from '../src/shared/config/decorators/routerDecorator';
import { ThemeDecorator } from '../src/shared/config/decorators/themeDecorator';
import { styleDecorator } from '../src/shared/config/decorators/styleDecorator';
import { Theme } from '../src';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // @ts-ignore
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator, styleDecorator],
};

export default preview;
