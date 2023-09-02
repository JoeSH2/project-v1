import { apiRTK } from 'shared/api/apiRTK';
import { Article } from 'entity/Article';

const recommendationsApi = apiRTK.injectEndpoints({
  endpoints: build => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: limit => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
