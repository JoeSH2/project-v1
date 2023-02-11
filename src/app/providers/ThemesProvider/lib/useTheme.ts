import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemesContext } from './ThemesContext';

interface UseMemoResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseMemoResult => {
  const { theme, setTheme } = useContext(ThemesContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.DEFAULT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
