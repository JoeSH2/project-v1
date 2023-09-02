import 'app/styles/index.scss';

import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemesProvider';

// export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
