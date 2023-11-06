import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entity/Comment/model/types/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
