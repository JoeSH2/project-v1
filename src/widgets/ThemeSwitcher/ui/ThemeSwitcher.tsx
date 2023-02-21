import React, { FC } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import MoonIcon from 'shared/assets/icon/moon.svg';
import SunIcon from 'shared/assets/icon/sun.svg';
import { Theme, useTheme } from 'app/providers/ThemesProvider';
import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
  theme?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button className={style.ThemeSwitcher} type="button" theme={ButtonTheme.DEFAULT} onClick={toggleTheme}>
      {theme === Theme.DARK ? (
        <MoonIcon className={style.icon} width={26} height={26} />
      ) : (
        <SunIcon className={style.icon} width={26} height={26} />
      )}
    </Button>
  );
};
