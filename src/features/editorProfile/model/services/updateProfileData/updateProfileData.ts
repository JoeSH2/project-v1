import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { validateError } from '@/features/editorProfile/model/consts';
import { Profile } from '@/entity/Profile';
import { validateFormData } from '../validateFormData/validateFormData';
import { getProfileForm } from '../../selectors/getProfileForm';

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
