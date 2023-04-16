import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

import { CommentFormSchema } from '../types/addComment';

const initialState: CommentFormSchema = {
  text: '',
  isLoading: false,
};

export const addCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {
    setText(state, actions) {
      state.text = actions.payload;
    },
  },
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
