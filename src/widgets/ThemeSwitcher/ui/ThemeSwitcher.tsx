import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import MoonIcon from 'shared/assets/icon/moon.svg';
import SunIcon from 'shared/assets/icon/sun.svg';
import { Theme, useTheme } from 'app/providers/ThemesProvider';
import { useTranslation } from 'react-i18next';
import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
  theme?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <Button theme={ButtonTheme.DEFAULT} onClick={toggleTheme}>
      {t('Theme')}
      {theme === Theme.DARK ? (
        <MoonIcon className={style.icon} width={22} height={22} />
      ) : (
        <SunIcon className={style.icon} width={22} height={22} />
      )}
    </Button>
  );
};
