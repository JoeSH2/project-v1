import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import type { SliceCaseReducers } from '@reduxjs/toolkit/dist';
import { CreateSliceOptions } from '@reduxjs/toolkit/dist';
import { useMemo } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

export const buildSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
  const slice = createSlice(options);
  const useSliceHook = (): typeof slice.actions => {
    const dispatch = useAppDispatch();
    // @ts-ignore
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
  };

  return {
    ...slice,
    useSliceHook,
  };
};
