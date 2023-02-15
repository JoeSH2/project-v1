import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './PageNotFound.module.scss';

interface PageNotFoundProps {
  className?: string;
  theme?: string;
}

export const PageNotFound: FC<PageNotFoundProps> = ({ className, children }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style.PageNotFound, {}, [className])}>
      {t('Page not found')}
    </div>
  );
};
