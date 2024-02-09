import { createContext } from 'react';

export enum Theme {
  DEFAULT = 'app_default_theme',
  DARK = 'app_dark_theme',
  BROWN = 'app_brown_theme',
}

interface ThemesContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemesContext = createContext<ThemesContextProps>({});
