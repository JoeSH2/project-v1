import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlePageLoading,
  getArticlePagePage,
} from '@/pages/ArticlesPage/model/selectors/getArticlePageSelectors';
import { articlePageActions } from '@/pages/ArticlesPage/model/slice/articlePageSlice';
import { fetchArticlePage } from '@/pages/ArticlesPage/model/services/fetchArticlePage';

export const fetchArticleNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/fetchArticleNextPage',
  async (_, { dispatch, getState }) => {
    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePagePage(getState());
    const isLoading = getArticlePageLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1));
      dispatch(fetchArticlePage({ replace: false }));
    }
  },
);
