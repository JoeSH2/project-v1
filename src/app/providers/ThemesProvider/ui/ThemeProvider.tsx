import React, { FC, useEffect, useMemo, useState } from 'react';

import { useGetJsonSettings } from '@/entity/User';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme, ThemesContext } from '@/shared/const/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DEFAULT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const jsonSettings = useGetJsonSettings();
  const [isInited, setIsInited] = useState(false);
  const [theme, setTheme] = useState(initialTheme || defaultTheme);

  useEffect(() => {
    if (!isInited) {
      if (jsonSettings?.theme !== undefined) {
        setTheme(jsonSettings.theme);
        setIsInited(true);
      }
    }
  }, [isInited, jsonSettings]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return <ThemesContext.Provider value={defaultProps}>{children}</ThemesContext.Provider>;
};

export default ThemeProvider;
