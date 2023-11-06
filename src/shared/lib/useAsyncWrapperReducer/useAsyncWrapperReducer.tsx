import { useDispatch, useStore } from 'react-redux';
import { Reducer, useEffect } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { ReduxStoreManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<StateSchema[name], AnyAction>;
};

export const useAsyncWrapperReducer = (reducers: ReducerList, unmounte?: boolean) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreManager;
  const mountedReducers = store.reducerManager.getReducerMap();

  useEffect(() => {
    let keyName;
    // eslint-disable-next-line no-undef
    const mouted = mountedReducers[keyName as unknown as StateSchemaKey];
    if (!mouted) {
      Object.entries(reducers).forEach(([key, reducer]) => {
        store.reducerManager.add(key as StateSchemaKey, reducer);
        dispatch({ type: `@MOUNT ${key}` });
      });
    }

    return () => {
      if (!unmounte) {
        Object.entries(reducers).forEach(([key]) => {
          store.reducerManager.remove(key as StateSchemaKey);
          dispatch({ type: `@UNMOUNT ${key}` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
