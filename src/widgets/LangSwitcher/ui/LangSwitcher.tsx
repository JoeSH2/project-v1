import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import style from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  theme?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
  className,
  children,
}) => {
  const { t, i18n } = useTranslation();
  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
      className={classNames(style.LangSwitcher, {}, [className])}
    >
      {t('ru/en')}
    </Button>
  );
};
