import React, { FC, memo, useCallback } from 'react';

import { fetchJsonSettings } from '@/entity/User';
import BrownIcon from '@/shared/assets/icon/brown.svg';
import MoonIcon from '@/shared/assets/icon/moon.svg';
import SunIcon from '@/shared/assets/icon/sun.svg';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme';
import { Button } from '@/shared/ui/Button';

import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
  theme?: string;
}

let actualTheme: Theme | undefined;

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const handleToggleTheme = useCallback(() => {
    toggleTheme(newTheme => {
      dispatch(
        fetchJsonSettings({
          theme: newTheme,
        }),
      );
    });
  }, [toggleTheme]);

  const iconButton = () => {
    switch (theme) {
      case Theme.DEFAULT:
        return <SunIcon className={style.icon} width={26} height={26} />;
      case Theme.DARK:
        return <MoonIcon className={style.icon} width={26} height={26} />;
      case Theme.BROWN:
        return <BrownIcon className={style.icon} width={26} height={26} />;
      default:
        return <MoonIcon className={style.icon} width={26} height={26} />;
    }
  };

  return (
    <div>
      <Button className={style.ThemeSwitcher} type='button' onClick={handleToggleTheme}>
        {iconButton()}
      </Button>
    </div>
  );
});
