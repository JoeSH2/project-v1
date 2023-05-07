import { AnyAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article, ArticleType } from 'entity/Article'

import { getArticleSortOrder, getArticleSortSearch, getArticleSortSort, getArticleSortType } from 'features/ArticleSort'
import { addQueryParams } from 'shared/lib/addQueryParams.ts/addQueryParams'
import { getArticlePageLimit, getArticlePagePage } from '../selectors/getArticlePageSelectors'

interface FetchArticlePageOptions {
  replace?: boolean
}

export const fetchArticlePage = createAsyncThunk<Article[], FetchArticlePageOptions, ThunkConfig<string>>(
  'articlePage/fetchArticlePage',
  async ({ replace = false }, { extra, rejectWithValue, getState }) => {
    const limit = getArticlePageLimit(getState())
    const page = getArticlePagePage(getState())
    const order = getArticleSortOrder(getState())
    const search = getArticleSortSearch(getState())
    const sort = getArticleSortSort(getState())
    const type = getArticleSortType(getState())
    try {
      addQueryParams({ sort, order, search, type })

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _order: order,
          _sort: sort,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
      return rejectWithValue('error fetch articles')
    }
  },
)
