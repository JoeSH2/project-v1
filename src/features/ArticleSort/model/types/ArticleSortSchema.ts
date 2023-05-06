import { ArticleType } from "entity/Article";
import { SortOrder } from "shared/types/types";

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CEATED = 'createdAt',
}

export interface ArticleSortSchema {
    search: string,
    order: SortOrder,
    sort: ArticleSortField,
    type: ArticleType,
}