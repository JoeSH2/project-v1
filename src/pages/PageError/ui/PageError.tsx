import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import style from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(style.PageError, {}, [className])}>
      <div>{t('There was an error, return to the home page?')}</div>
      <Button onClick={reloadPage} theme={ButtonTheme.CLEAR}>{t('Reload page')}</Button>
    </div>
  );
};
