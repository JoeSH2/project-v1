import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../../../../entities/Counter'; //   !!! ОШИБКА ПРИ АБСОЛЮТНОМ ИМПОРТЕ !!!
import { StateSchema } from './StateSchema';

export const reduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: { counter: counterReducer },
  devTools: __IS_DEV__,
  preloadedState: initialState,
});
