import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entity/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

interface LoginUserProps {
  username: string;
  password: string;
}

export const asyncLoginUser = createAsyncThunk<User, LoginUserProps, ThunkConfig<string>>(
  'login/asyncLoginUser',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post('/login', authData);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.signWith(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error fetch user');
    }
  },
);
