import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemesProvider/index';
import { styleDecorator } from '../../src/shared/config/decorators/styleDecorator';
import { RouterDecorator } from '../../src/shared/config/decorators/routerDecorator';
import { ThemeDecorator } from '../../src/shared/config/decorators/themeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(styleDecorator);
addDecorator(ThemeDecorator(Theme.DARK));
addDecorator(RouterDecorator);
