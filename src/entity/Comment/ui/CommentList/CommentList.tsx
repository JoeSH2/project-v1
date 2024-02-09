import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import style from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = ({ className, comments, isLoading }) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(style.CommentList, {}, [className])}>
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
      </div>
    );
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
