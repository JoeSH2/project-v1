import { ArticleDetails } from 'entity/Article';
import { CommentList } from 'entity/Comment/ui/CommentList/CommentList';
import { AddComment } from 'features/addComment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { ReducerList, useAsyncWrapperReducer } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { Text } from 'shared/ui/Text';
import { PageWrapper } from 'widgets/PageWrapper';
import { ArticlesRecommendationsList } from 'features/ArticlesRecommendationsList';
import { addCommentArticleDetails } from '../model/services/addCommentArticleDetails';
import { fetchArticleDetailsComments } from '../model/services/fetchArticleDetailsComments';
import { getArticleComments } from '../model/slice/ArticleDetailsCommentsSlice';
import { getArticleRecommendations } from '../model/slice/ArticleDetailsRecommendationsSlice';
import style from './AtriclesDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../model/slice';

interface AtriclesDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const AtriclesDetailsPage: FC<AtriclesDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const articles = useSelector(getArticleRecommendations.selectAll);

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
      <ArticlesRecommendationsList className={style.recommendations} />
      <AddComment onSendComment={onSendComment} />
      <CommentList comments={comments} />
    </PageWrapper>
  );
};

export default memo(AtriclesDetailsPage);
