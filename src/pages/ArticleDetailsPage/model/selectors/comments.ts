import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetails?.error;
