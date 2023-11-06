import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { getArticleDetailsCommentsLoading } from '@/pages/ArticleDetailsPage/model/selectors/comments';

import style from './CommentList.module.scss';
import { CommentCard } from '@/entity/Comment/ui/CommentCard/CommentCard';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Comment } from '@/entity/Comment/model/types/comment';

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
      {comments.length ? (
        comments.map(comment => <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />)
      ) : (
        <Text text={t('No comments')} />
      )}
    </div>
  );
};
