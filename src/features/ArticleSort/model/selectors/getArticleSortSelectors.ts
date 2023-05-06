import { StateSchema } from "app/providers/StoreProvider";
import { ArticleType } from "entity/Article";
import { ArticleSortField } from "../types/ArticleSortSchema";

export const getArticleSortOrder = (state: StateSchema) => state.articleSort?.order ?? 'asc';
export const getArticleSortSort = (state: StateSchema) => state.articleSort?.sort ?? ArticleSortField.CEATED;
export const getArticleSortSearch = (state: StateSchema) => state.articleSort?.search ?? '';
export const getArticleSortType = (state: StateSchema) => state.articleSort?.type ?? ArticleType.ALL;

