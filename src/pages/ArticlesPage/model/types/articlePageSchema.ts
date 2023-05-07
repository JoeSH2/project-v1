import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleView } from 'entity/Article'
import { SortOrder } from 'shared/types/types'

export interface articlePageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  // pagination
  page: number
  limit: number
  hasMore: boolean
  // filters
  view: ArticleView
  _inited?: boolean
}
