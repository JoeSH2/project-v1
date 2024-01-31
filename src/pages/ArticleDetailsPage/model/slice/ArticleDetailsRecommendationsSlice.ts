import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entity/Article';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import { fetchArticleDetailsRecommendations } from '../services/fetchArticleDetailsRecommendations';

const RecommendationsAdapter = createEntityAdapter<Article>({
  selectId: article => article.id,
});

export const getArticleRecommendations = RecommendationsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsPage?.recommendations || RecommendationsAdapter.getInitialState(),
);

const aticleDetailsRecommendationsSlice = createSlice({
  name: 'recommendations',
  initialState: RecommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    error: undefined,
    isLoading: false,
    entities: {},
    ids: [],
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleDetailsRecommendations.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleDetailsRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        RecommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleDetailsRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsRecommendationsReducer } = aticleDetailsRecommendationsSlice;
