// eslint-disable-next-line
import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line import-path-lint-plugin/layer-imports
import ThemeProvider from '@/app/providers/ThemesProvider/ui/ThemeProvider';

// export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
