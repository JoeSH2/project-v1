import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { getUserById } from '../api/patchJsonSettings';
import { User } from '../types/UserSchema';

export const fetchGetUserById = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/fetchGetUserById',
  async (_, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)?.slice(1, -1);
    try {
      if (!userId) {
        return rejectWithValue('');
      }
      const response = await dispatch(getUserById(userId)).unwrap();
      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
