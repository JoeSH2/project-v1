import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import style from './ArticleCard.module.scss';
import { Article, ArticleBlockText, ArticleView } from '../../../model/types/Article';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import ViewIcon from '@/shared/assets/icon/eye.svg';
import { Card } from '@/shared/ui/Card';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';
import { ArticleDetailsBlockText } from '../../ArticleDetailsBlockText';
import { Avatar } from '@/shared/ui/Avatar';
import { ArticleBlockType } from '../../../model/consts';
import ErrorImg from '@/shared/assets/icon/error.png';
import { getArticleDetailsPage } from '@/shared/const/route';
import { AppImage } from '@/shared/ui/AppImage';
import { Loader } from '@/shared/ui/Loader';

interface ArticleCardProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target: HTMLAttributeAnchorTarget;
}
export const ArticleCard: FC<ArticleCardProps> = ({ className, article, view, target }) => {
  const { t } = useTranslation();

  const loadingFeedback = <Loader theme='medium' />;
  const errorFeedback = <img className={style.img} alt='Error' src={ErrorImg} />;

  const wrapperInfo = (
    <div className={style.wrapperInfo}>
      <Text className={style.articleType} align='left' size='m' text={article.type.join(', ')} />
      <div className={style.wrapperView}>
        <ViewIcon className={style.viewIcon} width={20} />
        <Text size='m' className={style.views} text={String(article.views)} />
      </div>
    </div>
  );

  if (view === 'BIG') {
    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT,
    ) as ArticleBlockText;

    return (
      <div
        data-testid='ArticleCard'
        className={classNames(style.articleCard, {}, [className, style[view]])}
      >
        <Card className={style.card}>
          <div className={style.titleWrapper}>
            <div className={style.articleInfo}>
              <Text className={style.title} size='l' title={article.title} />
              <Avatar
                className={style.articleImg}
                src={article.img}
                alt={article.title}
                size={50}
              />
            </div>
            <div className={style.userWrapper}>
              <Avatar src={article.user?.avatar} className={style.avatar} size={45} />
              <Text size='l' text={article.user?.username} />
            </div>
          </div>
          {textBlock && <ArticleDetailsBlockText className={style.block} block={textBlock} />}
          <div className={style.btnWrapper}>
            <Text className={style.created} size='m' text={article.createdAt} />
            <AppLink target={target} to={getArticleDetailsPage(article.id)}>
              <Button className={style.btn}>{t('Read Article')}</Button>
            </AppLink>
          </div>
          {wrapperInfo}
        </Card>
      </div>
    );
  }

  return (
    <div
      data-testid='ArticleCard'
      className={classNames(style.articleCard, {}, [className, style[view]])}
    >
      <Card className={style.card}>
        <AppLink target={target} to={getArticleDetailsPage(article.id)}>
          <div className={style.wrapperIcon}>
            <AppImage
              loadingFeedback={loadingFeedback}
              errorFeedback={errorFeedback}
              className={style.img}
              src={article.img}
              alt={article.title}
            />
            <Text className={style.created} size='s' text={article.createdAt} />
          </div>
        </AppLink>
        {wrapperInfo}
        <Text size='m' className={style.title} title={article.title} />
      </Card>
    </div>
  );
};
