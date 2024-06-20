import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entity/Article';
import { articleSortActions,ArticleSortField } from '@/features/ArticleSort';
import { SortOrder } from '@/shared/types/types';

import { getArticlePageInited } from '../selectors/getArticlePageSelectors';
import { fetchArticlePage } from '../services/fetchArticlePage';
import { articlePageActions } from '../slice/articlePageSlice';

export const initedArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlePage/initedArticlePage',
  async (searchParams, { dispatch, getState }) => {
    const inited = getArticlePageInited(getState());

    if (!inited) {
      const order = searchParams.get('order');
      const sort = searchParams.get('sort');
      const search = searchParams.get('search');
      const type = searchParams.get('type');

      if (order) {
        dispatch(articleSortActions.setOrder(order as SortOrder));
      }
      if (sort) {
        dispatch(articleSortActions.setSort(sort as ArticleSortField));
      }
      if (search) {
        dispatch(articleSortActions.setSearch(search));
      }
      if (type) {
        dispatch(articleSortActions.setType(type as ArticleType));
      }

      dispatch(articlePageActions.addLocalStorageView());
      dispatch(fetchArticlePage({}));
    }
  },
);
