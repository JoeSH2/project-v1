import { ArticleView } from 'entity/Article/model/types/Article'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card'
import { Skeleton } from 'shared/ui/Skeleton'

import style from './ArticleCardSkeleton.module.scss'

interface ArticleCardSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleCardSkeleton: FC<ArticleCardSkeletonProps> = ({ className, view }) => {
  const { t } = useTranslation()

  if (view === 'BIG') {
    return (
      <div className={classNames(style.ArticleCardSkeleton, {}, [className, style[view]])}>
        <Card className={style.card}>
          <div className={style.titleWrapper}>
            <div className={style.articleInfo}>
              <Skeleton rounded={4} height='32px' width='280px' marginRight='1.8rem' />
              <Skeleton className={style.articleImg} width='50px' height='50px' />
            </div>
            <div className={style.userWrapper}>
              <Skeleton rounded='50%' height='45px' width='45px' className={style.avatar} />
              <Skeleton rounded={4} height='24px' width='140px' />
            </div>
          </div>
          <div className={style.block}>
            <Skeleton rounded={4} width='99%' height='16px' marginBottom={6} marginTop={35} className={style.btn} />
            <Skeleton rounded={4} width='99%' height='16px' marginBottom={6} className={style.btn} />
            <Skeleton rounded={4} width='99%' height='16px' marginBottom={6} className={style.btn} />
            <Skeleton rounded={4} width='70%' height='16px' marginBottom={6} className={style.btn} />
          </div>
          <div className={style.btnWrapper}>
            <Skeleton rounded={2} width='165px' height='40px' className={style.btn} />
          </div>
          <div className={style.wrapperInfo}>
            <Skeleton rounded={4} className={style.articleType} height='18px' width='220px' />
            <div className={style.wrapperView}>
              <Skeleton rounded={4} className={style.viewIcon} width='20px' height='20px' />
              <Skeleton rounded={4} className={style.views} width='50px' height='20px' />
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(style.ArticleCardSkeleton, {}, [className, style[view]])}>
      <Card className={style.card}>
        <div className={style.wrapperIcon}>
          <Skeleton className={style.img} height='270px' />
        </div>
        <div className={style.wrapperInfo}>
          <Skeleton rounded={4} className={style.articleType} height='18px' width='150px' />
          <div className={style.wrapperView}>
            <Skeleton rounded={4} className={style.viewIcon} width='20px' height='18px' />
            <Skeleton rounded={4} className={style.views} width='50px' height='18px' />
          </div>
        </div>
        <Skeleton height='24px' width='200px' className={style.title} />
      </Card>
    </div>
  )
}
