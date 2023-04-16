import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialState: [FTName]Schema = {
};

export const [FTName]Slice = createSlice({
  name: '[FTName]',
  initialState,
  reducers: {
  },
});

export const { actions: [FTName]Actions } = [FTName]Slice;
export const { reducer: [FTName]Reducer } = [FTName]Slice;
