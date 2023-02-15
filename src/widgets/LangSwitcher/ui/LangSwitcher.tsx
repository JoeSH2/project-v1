import React, { FC, useState } from 'react';
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
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
  className,
  children,
}) => {
  const { t, i18n } = useTranslation();
  const toggleLang = async (args: LangSwitcherValues) => {
    i18n.changeLanguage(args);
  };
  return (
    <div className={classNames(style.LangSwitcher, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={() => toggleLang(LangSwitcherValues.RU)}
        className={classNames(style.button, {}, [className, style.buttonR])}
      >
        {t('RU')}
      </Button>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={() => toggleLang(LangSwitcherValues.EN)}
        className={classNames(style.button, {}, [className, style.buttonL])}
      >
        {t('EN')}
      </Button>
    </div>
  );
};
