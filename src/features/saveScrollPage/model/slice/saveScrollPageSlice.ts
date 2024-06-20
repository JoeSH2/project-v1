import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import { SaveScrollPageSchema } from '../types/SaveScrollPageSchema';

const initialState: SaveScrollPageSchema = { scroll: {}, };

export const saveScrollPageSlice = createSlice({
  name: 'saveScrollPage',
  initialState,
  reducers: {
    setSaveScroll(state, actions: PayloadAction<{path: string, position: number}>) {
      state.scroll[actions.payload.path] = actions.payload.position;
    },
  },
});

export const { actions: saveScrollPageActions } = saveScrollPageSlice;
export const { reducer: saveScrollPageReducer } = saveScrollPageSlice;
