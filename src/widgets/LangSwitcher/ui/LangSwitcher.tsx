import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

import style from './LangSwitcher.module.scss';

export enum LangSwitcherValues {
  RU = 'ru',
  EN = 'en'
}

interface LangSwitcherProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode;
  isCollapsed: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
  const {
    className,
    children,
    isCollapsed,
  } = props;
  const { t, i18n } = useTranslation();
  const toggleLang = async (args: LangSwitcherValues) => {
    i18n.changeLanguage(args);
  };
  return (
    <div className={classNames(style.LangSwitcher, { [style.collapse]: isCollapsed }, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={() => toggleLang(LangSwitcherValues.RU)}
        className={classNames(style.button, { [style.btnRadius]: isCollapsed }, [className, style.buttonR])}
      >
        {t('RU')}
      </Button>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={() => toggleLang(LangSwitcherValues.EN)}
        className={classNames(style.button, { [style.btnRadius]: isCollapsed }, [className, style.buttonL])}
      >
        {t('EN')}
      </Button>
    </div>
  );
});
