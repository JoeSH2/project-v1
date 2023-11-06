import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCardSkeleton } from '../../ArticleCardSkeleton/ArticleCardSkeleton';
import { Article, ArticleView } from '../../../model/types/Article';
import { ArticleCard } from '../../ArticleCard/ui/ArticleCard';
import style from './ArticleList.module.scss';
import { Text } from '@/shared/ui/Text';

interface ArticleListProps {
  className?: string;
  view: ArticleView;
  articles: Article[] | undefined;
  target: HTMLAttributeAnchorTarget;
  isLoading?: boolean;
}

export const ArticleList: FC<ArticleListProps> = props => {
  const { t } = useTranslation();
  const { className, articles, target, isLoading, view = 'SMALL' } = props;

  const getSkeletons = (
    <>
      {new Array(view === 'SMALL' ? 8 : 4).fill(0).map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleCardSkeleton view={view} key={i} />
      ))}
    </>
  );

  // @ts-ignore
  return (
    <div className={classNames(style.articleList, {}, [className, style[view]])}>
      {articles ? (
        articles.map(article => <ArticleCard target={target} key={article.id} view={view} article={article} />)
      ) : (
        // eslint-disable-next-line react/jsx-no-undef
        <Text title={t('Error in receiving articles')} />
      )}
      {isLoading && getSkeletons}
    </div>
  );
};
