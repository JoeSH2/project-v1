import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails } from '@/entity/Article';

import { Text } from '@/shared/ui/Text';

import style from './ArticleDetailsPage.module.scss';
import { ReducerList, useAsyncWrapperReducer } from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { articleDetailsPageReducer } from '../../ArticleDetailsPage/model/slice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getArticleComments } from '../model/slice/ArticleDetailsCommentsSlice';
import { addCommentArticleDetails } from '../model/services/addCommentArticleDetails';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { fetchArticleDetailsComments } from '../model/services/fetchArticleDetailsComments';
import { PageWrapper } from '@/widgets/PageWrapper';
import { ArticlesRecommendationsList } from '@/features/ArticlesRecommendationsList';
import { AddComment } from '@/features/addComment';
import { CommentList } from '@/entity/Comment';
import { ArticleRating } from '@/features/ArticleRating';

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

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentArticleDetails(text));
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

  return (
    <PageWrapper className={className}>
      <ArticleDetails id={id} />
      <ArticleRating className={style.wrapperRating} articleId={id} />
      <ArticlesRecommendationsList className={style.recommendations} />
      <AddComment onSendComment={onSendComment} />
      <CommentList comments={comments} />
    </PageWrapper>
  );
};

export default memo(ArticleDetailsPage);
