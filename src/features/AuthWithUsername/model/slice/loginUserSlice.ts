import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import { asyncLoginUser } from '../services/asyncLoginUser';
import { LoginUserScheme } from '../types/LoginUserScheme';

const initialState: LoginUserScheme = {
  username: '',
  password: '',
  isLoading: false,
  status: '',
};

export const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    setUsername: (state, actions: PayloadAction<string>) => {
      state.username = actions.payload;
    },
    setPassword: (state, actions: PayloadAction<string>) => {
      state.password = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoginUser.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
      state.status = 'pending';
    });
    builder.addCase(asyncLoginUser.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload || actions.error.message;
      state.status = 'rejected';
    });
    builder.addCase(asyncLoginUser.fulfilled, (state) => {
      state.isLoading = false;
      state.status = 'fulfilled';
    });
  },
});

export const { actions: loginUserActions } = loginUserSlice;
export const { reducer: loginUserReducer } = loginUserSlice;
