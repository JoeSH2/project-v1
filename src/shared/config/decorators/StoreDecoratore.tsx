import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import { loginUserReducer } from 'features/AuthWithUsername/model/slice/loginUserSlice';
import { ReducerList } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';

const stateReducer: ReducerList = {
  loginUser: loginUserReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducer={stateReducer}>
    <StoryComponent />
  </StoreProvider>
);
