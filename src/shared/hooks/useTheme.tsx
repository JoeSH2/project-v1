import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme, ThemesContext } from '@/shared/const/theme';

interface UseMemoResult {
  theme: Theme;
  toggleTheme: (func: (theme: Theme) => void) => void;
}

export const useTheme = (): UseMemoResult => {
  const { theme, setTheme } = useContext(ThemesContext);

  const toggleTheme = (setNewTheme: (theme: Theme) => void) => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DEFAULT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.BROWN;
        break;
      case Theme.BROWN:
        newTheme = Theme.DEFAULT;
        break;
      default:
        newTheme = Theme.DARK;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setNewTheme(newTheme);
  };

  return {
    theme: theme || Theme.DARK,
    toggleTheme,
  };
};
