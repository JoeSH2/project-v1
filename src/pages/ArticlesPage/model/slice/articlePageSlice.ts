import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleView } from '@/entity/Article';
import { articlePageSchema } from '@/pages/ArticlesPage';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { fetchArticlePage } from '@/pages/ArticlesPage/model/services/fetchArticlePage';

const articleAdapter = createEntityAdapter<Article>({ selectId: article => article.id });

export const getArticle = articleAdapter.getSelectors<StateSchema>(
  state => state.articlePage || articleAdapter.getInitialState(),
);

const aticlePageSlice = createSlice({
  name: 'articlePage',
  initialState: articleAdapter.getInitialState<articlePageSchema>({
    entities: {},
    ids: [],
    error: undefined,
    isLoading: false,
    view: 'SMALL',
    hasMore: true,
    page: 1,
    _inited: false,
    limit: 8,
  }),
  reducers: {
    setView(state, action) {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    addLocalStorageView(state) {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === 'SMALL' ? 8 : 4;
    },
    initState: state => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === 'BIG' ? 4 : 8;
      state._inited = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticlePage.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg.replace) {
          articleAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlePage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;
        if (action.meta.arg.replace) {
          articleAdapter.setAll(state, action.payload);
        } else {
          articleAdapter.addMany(state, action.payload);
        }
        state._inited = true;
      })
      .addCase(fetchArticlePage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = aticlePageSlice;
