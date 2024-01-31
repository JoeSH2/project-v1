export interface IArticleRating {
  userId: string;
  articleId: string;
  hasFeedback?: boolean;
  feedback?: string;
  rate?: number;
}

export interface IProfileRating {
  userId: string;
  articleId: string;
  rate?: number;
}
