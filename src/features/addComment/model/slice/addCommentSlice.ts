import { createSlice } from '@reduxjs/toolkit';

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
