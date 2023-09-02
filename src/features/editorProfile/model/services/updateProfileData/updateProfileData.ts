import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from 'entity/Profile';
import { getProfileForm } from '../../selectors/getProfileForm';
import { validateError } from '../../types/editorProfileSchema';
import { validateFormData } from '../validateFormData/validateFormData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<validateError[]>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());
    const errorForm = validateFormData(formData);
    try {
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      if (errorForm.length) {
        return rejectWithValue(errorForm);
      }
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([validateError.NO_DATA]);
    }
  },
);
