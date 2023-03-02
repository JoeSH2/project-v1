import {
  combineReducers, configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { loginUserReducer } from 'features/AuthWithUsername';
import { StateSchema } from './StateSchema';

export const rootReducer = combineReducers<StateSchema>(
  {
    counter: counterReducer,
    user: userReducer,
    loginUser: loginUserReducer,
  },
);

export const reduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: __IS_DEV__,
});
