import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentFormText = (state: StateSchema) => state.commentForm?.text ?? '';
export const getCommentFormError = (state: StateSchema) => state.commentForm?.error;
export const getCommentFormLoading = (state: StateSchema) => state.commentForm?.isLoading;
