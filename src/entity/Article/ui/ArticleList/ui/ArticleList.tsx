/* eslint-disable max-len */
import { Article, ArticleView } from 'entity/Article'
import { FC, HTMLAttributeAnchorTarget } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleCard } from '../../ArticleCard'
import { ArticleCardSkeleton } from '../../ArticleCardSkeleton/ArticleCardSkeleton'
import style from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  view: ArticleView
  articles: Article[]
  target: HTMLAttributeAnchorTarget
  isLoading?: boolean
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const { className, articles, target, isLoading, view = 'SMALL' } = props

  const getSkeletons = (
    <>
      {new Array(view === 'SMALL' ? 8 : 4).fill(0).map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleCardSkeleton view={view} key={i} />
      ))}
    </>
  )

  return (
    <div className={classNames(style.articleList, {}, [className, style[view]])}>
      {articles.map((article) => (
        <ArticleCard target={target} key={article.id} view={view} article={article} />
      ))}
      {isLoading && getSkeletons}
    </div>
  )
}
