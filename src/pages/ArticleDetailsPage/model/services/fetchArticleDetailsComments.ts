import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entity/Comment/model/types/comment';

export const fetchArticleDetailsComments = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchArticleDetailsComments',
  async (articleId, { extra, rejectWithValue }) => {
    if (!articleId) {
      return rejectWithValue('Error');
    }
    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error fetch comment');
    }
  },
);
