import { useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider';

type Selectors<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selectors<T, Args>];

export const buildSelectors = <T, Args extends any[]>(
  selectors: Selectors<T, Args>,
): Result<T, Args> => {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((state: StateSchema) => selectors(state, ...args));

  return [useSelectorHook, selectors];
};
