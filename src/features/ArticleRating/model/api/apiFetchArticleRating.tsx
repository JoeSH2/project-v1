import { IArticleRating } from '@/entity/Rating';
import { apiRTK } from '@/shared/api/apiRTK';

interface IGetArticleRating {
  userId: string;
  articleId: string;
}

interface IAddArticleRating extends IGetArticleRating {
  rate: number;
  feedback?: string;
}

const apiFetchArticleRating = apiRTK.injectEndpoints({
  endpoints: build => ({
    getArticleRating: build.query<IArticleRating[], IGetArticleRating>({
      query: ({ articleId, userId }) => ({
        url: '/articles-rating',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    addArticleRating: build.mutation<void, IAddArticleRating>({
      query: ({ articleId, userId, rate, feedback }) => ({
        url: '/articles-rating',
        method: 'POST',
        body: { articleId, userId, rate, feedback },
      }),
    }),
  }),
});
export const useGetArticleRating = apiFetchArticleRating.useGetArticleRatingQuery;
export const useAddArticleRating = apiFetchArticleRating.useAddArticleRatingMutation;
