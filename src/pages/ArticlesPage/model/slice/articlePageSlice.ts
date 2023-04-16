import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entity/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

import { fetchArticlePage } from '../services/fetchArticlePage';
import { articlePageSchema } from '../types/articlePageSchema';

const articleAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticle = articleAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articleAdapter.getInitialState(),
);

const aticlePageSlice = createSlice({
  name: 'articlePage',
  initialState: articleAdapter.getInitialState<articlePageSchema>({
    entities: {},
    ids: [],
    error: undefined,
    isLoading: false,
    view: 'SMALL',
  }),
  reducers: {
    setView(state, action) {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    addLocalStorageView(state) {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlePage.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlePage.fulfilled, (
        state,
        action: PayloadAction<Article[]>,
      ) => {
        state.isLoading = false;
        articleAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlePage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = aticlePageSlice;
