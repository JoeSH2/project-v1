import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import style from './ArticleEditButton.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';

import { getArticleEditPage } from '@/shared/const/route';

interface ArticleEditButtonProps {
  className?: string;
  id: string;
}

export const ArticleEditButton: FC<ArticleEditButtonProps> = props => {
  const { className, id } = props;
  const { t } = useTranslation();

  return (
    <AppLink to={getArticleEditPage(id)}>
      <Button className={classNames(style.ArticleEditButton, {}, [className])}>{t('Edit article')}</Button>
    </AppLink>
  );
};
