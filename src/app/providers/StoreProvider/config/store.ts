import {
  configureStore, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState: StateSchema, asyncRedusers: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncRedusers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// export const rootReducer: ReducersMapObject<StateSchema> = {
//   counter: counterReducer,
//   user: userReducer,
// };

// export const store = (initialState?: StateSchema) => configureStore<StateSchema>({
//   reducer: rootReducer,
//   preloadedState: initialState,
//   devTools: __IS_DEV__,
// });

// const reducerManager = createReducerManager(rootReducer);

// store.reducerManager = reducerManager;
