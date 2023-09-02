import { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemesProvider/index';
// import { styleDecorator } from '../../src/shared/config/decorators/styleDecorator';
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

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
//
// export const decorators = [styleDecorator, ThemeDecorator(Theme.DARK), RouterDecorator];
// addDecorator(styleDecorator);
// addDecorator(ThemeDecorator(Theme.DARK));
// addDecorator(RouterDecorator);
// .storybook/preview.ts
// Replace your-framework with the framework you are using (e.g., react, vue3)
