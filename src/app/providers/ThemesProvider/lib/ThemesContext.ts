import { createContext } from 'react';

export enum Theme {
  DEFAULT = 'app_default_theme',
  DARK = 'app_dark_theme',
  BROWN = 'app_brown_theme'
}

export interface ThemesContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemesContext = createContext<ThemesContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
