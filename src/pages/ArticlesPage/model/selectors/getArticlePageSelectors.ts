import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePageLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || 'SMALL';
export const getArticlePagePage = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 8;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articlePage?._inited;
