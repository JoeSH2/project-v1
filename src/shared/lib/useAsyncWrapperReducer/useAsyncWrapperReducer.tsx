import { AnyAction } from '@reduxjs/toolkit';
import { ReduxStoreManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<any, AnyAction>
}

export const useAsyncWrapperReducer = (
  reducers: ReducerList,
) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      store.reducerManager.add(key as StateSchemaKey, reducer);
      dispatch({ type: `@MOUNT ${key}` });
    });

    return () => {
      Object.entries(reducers).forEach(([key]) => {
        store.reducerManager.remove(key as StateSchemaKey);
        dispatch({ type: `@UNMOUNT ${key}` });
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
