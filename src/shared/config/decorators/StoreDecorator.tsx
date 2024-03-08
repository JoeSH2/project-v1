// eslint-disable-next-line
import '@/app/styles/index.scss';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { ReducerList } from '../../lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { loginUserReducer } from '@/features/AuthWithUsername/testing';
import { editorProfileReducer } from '@/features/editorProfile/testing';
import { ArticleReducer } from '@/entity/Article/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { articleSortReducer } from '@/features/ArticleSort/testing';
import { userReducer } from '@/entity/User/testing';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

const stateReducer: ReducerList = {
  loginUser: loginUserReducer,
  profile: editorProfileReducer,
  articleDetails: ArticleReducer,
  articleDetailsPage: articleDetailsPageReducer,
  articleSort: articleSortReducer,
  user: userReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) =>
  (
    <StoreProvider initialState={state} asyncReducer={stateReducer}>
      <StoryComponent />
    </StoreProvider>
  );
