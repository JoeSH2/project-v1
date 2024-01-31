export { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage.async';
export type { ArticleDetailsPageSchema } from './model/types/index';
export { articleDetailsPageReducer } from './model/slice/index';
export { getCanEditArticle } from './model/selectors/article';
export {
  getArticleDetailsRecommendationsError,
  getArticleDetailsRecommendationsLoading,
} from './model/selectors/recommendations';
export { getArticleDetailsCommentsError, getArticleDetailsCommentsLoading } from './model/selectors/comments';
