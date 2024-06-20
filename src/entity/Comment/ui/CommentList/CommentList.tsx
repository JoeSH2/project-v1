import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import style from './CommentList.module.scss';

interface CommentListProps {
  onDeleteComment?: (comm: Comment) => void;
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = ({
  className,
  comments,
  isLoading,
  onDeleteComment,
}) => {
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
    <div data-testid='CommentList' className={classNames(style.CommentList, {}, [className])}>
      {comments.length ? (
        comments.map(comment => (
          <CommentCard
            onDeleteComment={onDeleteComment}
            isLoading={isLoading}
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t('No comments')} />
      )}
    </div>
  );
};
