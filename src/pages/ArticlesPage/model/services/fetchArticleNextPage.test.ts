import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { fetchArticleNextPage } from '@/pages/ArticlesPage/model/services/fetchArticleNextPage';
import { fetchArticlePage } from '@/pages/ArticlesPage/model/services/fetchArticlePage';

jest.mock('./fetchArticlePage');

describe('fetchArticleNextPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleNextPage, {
      articlePage: {
        entities: {},
        hasMore: true,
        ids: [],
        page: 2,
        view: 'BIG',
        isLoading: false,
        limit: 8,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlePage).toHaveBeenCalledWith({ replace: false });
  });

  test('not fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleNextPage, {
      articlePage: {
        entities: {},
        ids: [],
        page: 2,
        view: 'BIG',
        isLoading: false,
        hasMore: false,
        limit: 8,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlePage).not.toBeCalled();
  });
});
