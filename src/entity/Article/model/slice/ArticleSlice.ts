import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchArticleById } from '../services/fetchArticleById'
import { Article } from '../types/Article'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'

const initialState: ArticleDetailsSchema = { isLoading: false }

export const ArticleSlice = createSlice({
  name: 'Article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(fetchArticleById.rejected, (state, actions) => {
      state.isLoading = false
      state.error = actions.payload
    })
    builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
      state.isLoading = false
      state.data = action.payload
    })
  },
})

export const { actions: ArticleActions } = ArticleSlice
export const { reducer: ArticleReducer } = ArticleSlice
