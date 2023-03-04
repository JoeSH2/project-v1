import { AnyAction } from '@reduxjs/toolkit';
import { ReduxStoreManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<any, AnyAction>
}

type ReducerArray = [StateSchemaKey, Reducer<any, AnyAction>]

export const useAsyncWrapperReducer = (
  reducers: ReducerList,
) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducerArray) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@MOUNT ${key}` });
    });

    return () => {
      Object.entries(reducers).forEach(([key, reducer]: ReducerArray) => {
        store.reducerManager.remove(key);
        dispatch({ type: `@UNMOUNT ${key}` });
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
