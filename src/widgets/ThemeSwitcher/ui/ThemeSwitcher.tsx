import { Theme, useTheme } from 'app/providers/ThemesProvider';
import React, { FC, memo } from 'react';
import BrownIcon from 'shared/assets/icon/brown.svg';
import MoonIcon from 'shared/assets/icon/moon.svg';
import SunIcon from 'shared/assets/icon/sun.svg';
import { Button } from 'shared/ui/Button';

import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
  theme?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(() => {
  const { theme, toggleTheme } = useTheme();

  if (theme === Theme.BROWN) {
    return (
      <Button className={style.ThemeSwitcher} type="button" onClick={toggleTheme}>
        <BrownIcon className={style.icon} width={26} height={26} />
      </Button>
    );
  }

  return (

    <div>
      <Button className={style.ThemeSwitcher} type="button" onClick={toggleTheme}>
        {theme === Theme.DARK ? (
          <MoonIcon className={style.icon} width={26} height={26} />
        ) : (
          <SunIcon className={style.icon} width={26} height={26} />
        )}
      </Button>
    </div>
  );
});
