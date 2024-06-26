import { createEntityAdapter, createSlice,PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entity/Comment';

import { fetchArticleDetailsComments } from '../services/fetchArticleDetailsComments';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSlice';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: comment => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    entities: {},
    ids: [],
    error: undefined,
    isLoading: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleDetailsComments.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleDetailsComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleDetailsComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
