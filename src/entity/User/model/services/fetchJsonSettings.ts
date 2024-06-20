import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { patchJsonSettings } from '../api/patchJsonSettings';
import { getUserAuth } from '../selectors/getUserAuth';
import { getJsonSettings } from '../selectors/getUserJsonSettings';
import { JsonSettings } from '../types/JsonSettings';

export const fetchJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
  'user/fetchJsonSettings',
  async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const userAuth = getUserAuth(getState());
    const currentSettings = getJsonSettings(getState());
    try {
      if (!userAuth) {
        return rejectWithValue('');
      }
      const response = await dispatch(
        patchJsonSettings({
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings,
          },
          userId: userAuth.id,
        }),
      ).unwrap();
      if (!response.jsonSettings) {
        return rejectWithValue('');
      }
      return response.jsonSettings;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
