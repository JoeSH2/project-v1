import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { getArticleCreatePage } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';

import style from './ArticleCreateButton.module.scss';

interface ArticleCreateButtonProps {
  className?: string;
}

export const ArticleCreateButton: FC<ArticleCreateButtonProps> = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <AppLink to={getArticleCreatePage()}>
      <Button className={classNames(style.ArticleCreateButton, {}, [className])}>{t('Create article')}</Button>
    </AppLink>
  );
};
