import { createContext } from 'react';

export enum Theme {
  DEFAULT = 'default',
  DARK = 'dark',
}

export interface ThemesContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemesContext = createContext<ThemesContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
