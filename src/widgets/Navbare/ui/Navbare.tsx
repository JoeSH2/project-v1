import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import style from './Navbare.module.scss';

interface NavbareProps {
  className?: string;
  theme?: string;
}

export const Navbare: FC<NavbareProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.Navbare, {}, [className])}>
      <AppLink to="/" theme={AppLinkTheme.DARK}>
        {t('Main page')}
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.DEFAULT}>
        {t('About us')}
      </AppLink>
    </div>
  );
};
