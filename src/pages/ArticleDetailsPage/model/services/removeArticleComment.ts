import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entity/Article';
import { Comment } from '@/entity/Comment';
import { getUserAuth } from '@/entity/User';

import { fetchArticleDetailsComments } from './fetchArticleDetailsComments';

export const removeArticleComment = createAsyncThunk<void, Comment, ThunkConfig<string>>(
  'articleDetails/removeArticleComment',
  async (comment, { extra, rejectWithValue, getState, dispatch }) => {
    const article = getArticleDetailsData(getState());
    const user = getUserAuth(getState());

    if (user?.id !== comment.user.id) {
      return rejectWithValue('no rules');
    }

    try {
      await extra.api.delete<Comment>(`/comments/${comment.id}`);
      dispatch(fetchArticleDetailsComments(article?.id));
    } catch (e) {
      console.log(e);
      return rejectWithValue('error delete comment');
    }
  },
);
