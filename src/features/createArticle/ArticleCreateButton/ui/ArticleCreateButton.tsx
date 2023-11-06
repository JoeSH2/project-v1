import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleCreateButton.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/AppRoute';
import { Button } from '@/shared/ui/Button';

interface ArticleCreateButtonProps {
  className?: string;
}

export const ArticleCreateButton: FC<ArticleCreateButtonProps> = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <AppLink to={RoutePath.article_create}>
      <Button className={classNames(style.ArticleCreateButton, {}, [className])}>{t('Create article')}</Button>
    </AppLink>
  );
};
