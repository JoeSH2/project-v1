import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeaturesFlag } from '@/shared/lib/featuresFlags';

import { fetchGetUserById } from '../services/fetchGetUserById';
import { fetchJsonSettings } from '../services/fetchJsonSettings';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = { mounted: false };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signWith: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload.id));
    },
    logout: state => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchJsonSettings.fulfilled, (state, action) => {
      if (state.authData) {
        state.authData.jsonSettings = action.payload;
      }
    });

    builder.addCase(fetchGetUserById.fulfilled, (state, action) => {
      state.authData = action.payload;
      setFeaturesFlag(action.payload.features);
      state.mounted = true;
    });
    builder.addCase(fetchGetUserById.rejected, state => {
      state.mounted = true;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
