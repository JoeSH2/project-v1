import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entity/Article';

export interface articlePageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,
    view: ArticleView;
}
