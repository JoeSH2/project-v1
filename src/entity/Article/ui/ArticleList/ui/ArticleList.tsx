/* eslint-disable max-len */
import { Article, ArticleView } from 'entity/Article';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleCard } from '../../ArticleCard';
import { ArticleCardSkeleton } from '../../ArticleCardSkeleton/ArticleCardSkeleton';
import style from './ArticleList.module.scss';

interface ArticleListProps {
   className?: string;
   view: ArticleView;
   articles: Article[];
   isLoading?: boolean;
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const {
    className, articles, isLoading, view = 'SMALL',
  } = props;

  if (isLoading) {
    return (
      <div className={style[view]}>
        {new Array(view === 'SMALL' ? 9 : 3).fill(0).map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ArticleCardSkeleton view={view} key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={classNames(style.articleList, {}, [className, style[view]])}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          view={view}
          article={article}
        />
      ))}
    </div>
  );
};
