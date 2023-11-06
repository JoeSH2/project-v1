import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSlice'
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsRecommendationsSchema
}
