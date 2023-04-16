import {
  Article, ArticleBlockText, ArticleBlockType, ArticleView,
} from 'entity/Article/model/types/Article';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ViewIcon from 'shared/assets/icon/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/AppRoute';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';

import { ArticleDetailsBlockText } from '../../ArticleDetailsBlockText';
import style from './ArticleCard.module.scss';

interface ArticleCardProps {
   className?: string;
   article: Article;
   view: ArticleView;
}

export const ArticleCard: FC<ArticleCardProps> = ({ className, article, view }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const wrapperInfo = (
    <div className={style.wrapperInfo}>
      <Text className={style.articleType} align="left" size="m" text={article.type.join(', ')} />
      <div className={style.wrapperView}>
        <ViewIcon className={style.viewIcon} width={20} />
        <Text size="m" className={style.views} text={String(article.views)} />
      </div>
    </div>
  );

  if (view === 'BIG') {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleBlockText;

    return (
      <div className={classNames(style.articleCard, {}, [className, style[view]])}>
        <Card className={style.card}>
          <div className={style.titleWrapper}>
            <Text align="left" className={style.title} size="l" title={article.title} />
            <div className={style.userWrapper}>
              <Avatar src={article.user?.avatar} className={style.avatar} size={45} />
              <Text size="l" text={article.user?.username} />
            </div>
          </div>
          {textBlock && <ArticleDetailsBlockText className={style.block} block={textBlock} />}
          <div className={style.btnWrapper}>
            <Button onClick={onOpenArticle} className={style.btn}>{t('Read Article')}</Button>
          </div>
          {wrapperInfo}
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(style.articleCard, {}, [className, style[view]])}>
      <Card className={style.card}>
        <div onClick={onOpenArticle} className={style.wrapperIcon}>
          <img className={style.img} src={article.img} alt={article.title} />
          <Text className={style.created} size="s" text={article.createdAt} />
        </div>
        {wrapperInfo}
        <Text size="m" className={style.title} title={article.title} />
      </Card>
    </div>
  );
};
