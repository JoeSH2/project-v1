import { getArticleDetailsCommentsLoading } from 'pages/AtriclesDetailsPage/model/selectors/comments';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import style from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments: Comment[];
}

export const CommentList: FC<CommentListProps> = ({ className, comments }) => {
  const { t } = useTranslation();
  const isLoading = useSelector(getArticleDetailsCommentsLoading);

  if (isLoading) {
    <div className={classNames(style.CommentList, {}, [className])}>
      <CommentCard isLoading={isLoading} />
      <CommentCard isLoading={isLoading} />
      <CommentCard isLoading={isLoading} />
    </div>;
  }

  return (
    <div className={classNames(style.CommentList, {}, [className])}>
      {comments.length ? comments.map((comment) => (
        <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
      )) : <Text text={t('No comments')} />}
    </div>
  );
};
