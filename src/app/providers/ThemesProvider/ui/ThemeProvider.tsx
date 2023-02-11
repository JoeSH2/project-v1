import React, { FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemesContext,
} from '../lib/ThemesContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DEFAULT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemesContext.Provider value={defaultProps}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemeProvider;
