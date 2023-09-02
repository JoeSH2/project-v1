import 'app/styles/index.scss';

import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ArticleReducer } from 'entity/Article';
import { loginUserReducer } from 'features/AuthWithUsername/model/slice/loginUserSlice';
import { ReducerList } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { articleSortReducer } from 'features/ArticleSort/model/slice/articleSortSlice';
import { userReducer } from 'entity/User';
import { articleDetailsPageReducer } from 'pages/AtriclesDetailsPage';
import { editorProfileReducer } from 'features/editorProfile/model/slice/editorProfileSlice';

const stateReducer: ReducerList = {
  loginUser: loginUserReducer,
  profile: editorProfileReducer,
  articleDetails: ArticleReducer,
  articleDetailsPage: articleDetailsPageReducer,
  articleSort: articleSortReducer,
  user: userReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
  (
    <StoreProvider initialState={state} asyncReducer={stateReducer}>
      <StoryComponent />
    </StoreProvider>
  );
