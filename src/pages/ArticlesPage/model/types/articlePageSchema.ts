import { EntityState } from '@reduxjs/toolkit/dist/entities/models';
import { Article, ArticleView } from '@/entity/Article';

export interface articlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  view: ArticleView;
  _inited?: boolean;
}
