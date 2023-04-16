export interface CommentFormSchema {
    userId?: string,
    articleId?: string,
    text: string,
    error?: string,
    isLoading: boolean;
}
