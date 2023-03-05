import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entity/User';

interface LoginUserProps {
    username: string;
    password: string;
}

export const asyncLoginUser = createAsyncThunk<User, LoginUserProps, { rejectValue: string }>(
  'login/asyncLoginUser',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }
      thunkAPI.dispatch(userActions.signWith(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);
