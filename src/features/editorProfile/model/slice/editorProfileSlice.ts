import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entity/Profile/model/types/Profile';
import { ProfileSchema } from '@/features/editorProfile';
import { fetchProfileData } from '@/features/editorProfile/model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '@/features/editorProfile/model/services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isLoading: true,
  readonly: true,
  error: undefined,
};

export const editorProfileSlice = createSlice({
  name: 'editorProfile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    setDataForm: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    setCancelEdit: state => {
      state.readonly = true;
      state.validateForm = undefined;
      state.form = state.data;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProfileData.pending, state => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = state.data;
    });
    builder.addCase(updateProfileData.pending, state => {
      state.validateForm = undefined;
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.rejected, (state, actions) => {
      state.isLoading = false;
      state.validateForm = actions.payload;
    });
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.readonly = true;
    });
  },
});

export const { actions: editorProfileActions } = editorProfileSlice;
export const { reducer: editorProfileReducer } = editorProfileSlice;
