import { buildSlice } from '@/shared/lib/buildRedux';

import { CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = { value: 0 };

export const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer, useSliceHook: useCounterSlice } = counterSlice;
