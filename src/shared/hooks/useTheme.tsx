import { useContext } from 'react';
import { Theme, ThemesContext } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

interface UseMemoResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseMemoResult => {
  const { theme, setTheme } = useContext(ThemesContext);

  const toggleTheme = () => {
    // const newTheme = theme === Theme.DARK ? Theme.DEFAULT : Theme.DARK;
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
  };

  return {
    theme: theme || Theme.DARK,
    toggleTheme,
  };
};
