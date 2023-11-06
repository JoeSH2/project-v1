import { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemesProvider/index';
import { RouterDecorator } from '../../src/shared/config/decorators/routerDecorator';
import { ThemeDecorator } from '../../src/shared/config/decorators/themeDecorator';
import { styleDecorator } from '../../src/shared/config/decorators/styleDecorator';

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
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator, styleDecorator],
};

export default preview;
