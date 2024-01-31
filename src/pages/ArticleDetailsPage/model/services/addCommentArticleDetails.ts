import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entity/Comment';
import { getUserAuth } from '@/entity/User';
import { getArticleDetailsData } from '@/entity/Article';
import { fetchArticleDetailsComments } from '../services/fetchArticleDetailsComments';

export const addCommentArticleDetails = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentArticleDetails',
  async (text, { extra, rejectWithValue, getState, dispatch }) => {
    const userData = getUserAuth(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        userId: userData.id,
        articleId: article.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchArticleDetailsComments(article.id));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error fetch comment');
    }
  },
);
