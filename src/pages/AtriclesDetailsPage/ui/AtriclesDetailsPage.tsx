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
import { PageWrapper } from 'shared/ui/PageWrapper';
import { Text } from 'shared/ui/Text';

import { addCommentArticleDetails } from '../model/services/addCommentArticleDetails';
import { fetchArticleDetailsComments } from '../model/services/fetchArticleDetailsComments';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/ArticleDetailsCommentsSlice';

interface AtriclesDetailsPageProps {
   className?: string;
}

const reducerList: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const AtriclesDetailsPage: FC<AtriclesDetailsPageProps> = (props) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const comment = useSelector(getArticleComments.selectAll);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentArticleDetails(text));
  }, [dispatch]);

  useAsyncWrapperReducer(reducerList);

  useInitialEffect(() => {
    dispatch(fetchArticleDetailsComments(id));
  });

  if (!id) {
    return (
      <Text title={t('No article found =(')} />
    );
  }

  return (
    <PageWrapper>
      <ArticleDetails id={id} />
      <AddComment onSendComment={onSendComment} />
      <CommentList
        comments={comment}
      />
    </PageWrapper>
  );
};

export default memo(AtriclesDetailsPage);
