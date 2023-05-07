import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'

import { getArticlePageHasMore, getArticlePageLoading, getArticlePagePage } from '../selectors/getArticlePageSelectors'
import { articlePageActions } from '../slice/articlePageSlice'
import { fetchArticlePage } from './fetchArticlePage'

export const fetchArticleNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/fetchArticleNextPage',
  async (_, { dispatch, getState }) => {
    const hasMore = getArticlePageHasMore(getState())
    const page = getArticlePagePage(getState())
    const isLoading = getArticlePageLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1))
      dispatch(fetchArticlePage({ replace: false }))
    }
  },
)
