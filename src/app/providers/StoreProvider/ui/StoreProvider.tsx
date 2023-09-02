import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducer }) => {
  const store = createReduxStore(initialState as StateSchema, asyncReducer as ReducersMapObject<StateSchema>);
  return <Provider store={store}>{children}</Provider>;
};
