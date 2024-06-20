import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entity/Article';
import { Comment, CommentList } from '@/entity/Comment';
import { AddComment } from '@/features/addComment';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticlesRecommendationsList } from '@/features/ArticlesRecommendationsList';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import {
  ReducerList,
  useAsyncWrapperReducer,
} from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { Text } from '@/shared/ui/Text';
import { PageWrapper } from '@/widgets/PageWrapper';

import { articleDetailsPageReducer } from '../../ArticleDetailsPage/model/slice';
import { getCanEditArticle } from '../model/selectors/article';
import { getArticleDetailsCommentsLoading } from '../model/selectors/comments';
import { addCommentArticleDetails } from '../model/services/addCommentArticleDetails';
import { fetchArticleDetailsComments } from '../model/services/fetchArticleDetailsComments';
import { removeArticleComment } from '../model/services/removeArticleComment';
import { getArticleComments } from '../model/slice/ArticleDetailsCommentsSlice';

import style from './ArticleDetailsPage.module.scss';

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
