import { ArticleType } from '@/entity/Article';
import { SortOrder } from '@/shared/types/types';

import { ArticleSortField } from '../consts';

export interface ArticleSortSchema {
  search: string;
  order: SortOrder;
  sort: ArticleSortField;
  type: ArticleType;
}
