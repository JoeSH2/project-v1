import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { getArticlePageHasMore, getArticlePageLoading, getArticlePagePage } from '../selectors/getArticlePageSelectors';
import { fetchArticlePage } from '../services/fetchArticlePage';
import { articlePageActions } from '../slice/articlePageSlice';

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
