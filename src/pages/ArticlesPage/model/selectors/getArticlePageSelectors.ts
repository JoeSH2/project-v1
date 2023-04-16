import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || 'SMALL';
