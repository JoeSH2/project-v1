import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails } from '@/entity/Article';
import { Text } from '@/shared/ui/Text';
import style from './ArticleDetailsPage.module.scss';
import {
  ReducerList,
  useAsyncWrapperReducer,
} from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { articleDetailsPageReducer } from '../../ArticleDetailsPage/model/slice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getArticleComments } from '../model/slice/ArticleDetailsCommentsSlice';
import { addCommentArticleDetails } from '../model/services/addCommentArticleDetails';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { fetchArticleDetailsComments } from '../model/services/fetchArticleDetailsComments';
import { PageWrapper } from '@/widgets/PageWrapper';
import { ArticlesRecommendationsList } from '@/features/ArticlesRecommendationsList';
import { AddComment } from '@/features/addComment';
import { Comment, CommentList } from '@/entity/Comment';
import { ArticleRating } from '@/features/ArticleRating';
import { getArticleDetailsCommentsLoading } from '../model/selectors/comments';
import { getCanEditArticle } from '../model/selectors/article';
import { removeArticleComment } from '../model/services/removeArticleComment';
import { getUserAuth, getUserRole } from '@/entity/User';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsLoading);
  const canEdit = useSelector(getCanEditArticle);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentArticleDetails(text));
    },
    [dispatch],
  );

  const removeComment = useCallback(
    (comm: Comment) => {
      dispatch(removeArticleComment(comm));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchArticleDetailsComments(id));
  });

  useAsyncWrapperReducer(reducerList);

  if (!id) {
    return <Text title={t('No article found =(')} />;
  }

  console.log(isLoading);

  return (
    <PageWrapper data-testid='ArticleDetailsPage' className={className}>
      <ArticleDetails canEdit={canEdit} id={id} />
      <ArticleRating className={style.wrapperRating} articleId={id} />
      <ArticlesRecommendationsList className={style.recommendations} />
      <AddComment onSendComment={onSendComment} />
      <CommentList onDeleteComment={removeComment} isLoading={isLoading} comments={comments} />
    </PageWrapper>
  );
};

export default memo(ArticleDetailsPage);
