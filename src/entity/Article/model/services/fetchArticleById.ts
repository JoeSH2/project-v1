import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '@/entity/Article';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (atticleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article>(`/articles/${atticleId}`, {
        params: {
          _expand: 'user',
        },
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error fetch article');
    }
  },
);
