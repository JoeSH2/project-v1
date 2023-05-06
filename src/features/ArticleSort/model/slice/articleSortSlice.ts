import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortOrder } from "shared/types/types";
import { ArticleType } from "entity/Article";
import { ArticleSortField, ArticleSortSchema } from "../types/ArticleSortSchema";

const initialState: ArticleSortSchema = {
  order: "asc",
  search: '',
  sort: ArticleSortField.CEATED,
  type: ArticleType.ALL,
}

const articleSortSlice = createSlice({
  name: "articleSort",
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<SortOrder>) {
      state.order = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSort(state, action: PayloadAction<ArticleSortField>) {
      state.sort = action.payload;
    },
    setType(state, action: PayloadAction<ArticleType>) {
      state.type = action.payload;
    }
  }
})

export const { reducer: articleSortReducer, actions: articleSortActions } = articleSortSlice;