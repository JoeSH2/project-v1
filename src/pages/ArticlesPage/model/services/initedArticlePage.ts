import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlePageInited } from '@/pages/ArticlesPage/model/selectors/getArticlePageSelectors';
import { articleSortActions } from '@/features/ArticleSort/model/slice/articleSortSlice';
import { SortOrder } from '@/shared/types/types';
import { ArticleSortField } from '@/features/ArticleSort/model/consts';
import { ArticleType } from '@/entity/Article';
import { articlePageActions } from '@/pages/ArticlesPage/model/slice/articlePageSlice';
import { fetchArticlePage } from '@/pages/ArticlesPage/model/services/fetchArticlePage';

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
