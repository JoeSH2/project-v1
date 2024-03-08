import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type Selectors<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selectors<T>];

export const buildSelectors = <T,>(selectors: Selectors<T>): Result<T> => {
  const useSelectorHook = () => useSelector(selectors);

  return [useSelectorHook, selectors];
};
