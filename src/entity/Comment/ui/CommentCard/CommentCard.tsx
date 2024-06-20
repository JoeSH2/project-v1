import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuth } from '@/entity/User';
import Cross from '@/shared/assets/icon/cross.svg';
import DefaultAvatar from '@/shared/assets/icon/default-avatar.jpg';
import { getProfilePage } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Svg } from '@/shared/ui/Svg/ui/Svg';
import { Text } from '@/shared/ui/Text';

import { Comment } from '../../model/types/comment';

import style from './CommentCard.module.scss';

interface CommentCardProps {
  onDeleteComment?: (comm: Comment) => void;
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = ({
  className,
  comment,
  isLoading,
  onDeleteComment,
}) => {
  const user = useSelector(getUserAuth);
  const canDeleteComment = user?.id === comment?.user.id;
  const onRemoveComment = () => {
    if (comment && onDeleteComment) {
      onDeleteComment(comment);
    }
  };

  if (isLoading) {
    return (
      <div className={classNames(style.Comment, {}, [className])}>
        <div className={style.userWrapper}>
          <Skeleton className={style.avatar} height='50px' width='50px' rounded='50%' />
          <Skeleton className={style.username} height='24px' width='100px' />
        </div>
        <div className={style.wrapperTextSkeleton}>
          <Skeleton height='12px' width='100%' />
          <Skeleton height='12px' width='300px' />
        </div>
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div data-testid='CommentCard' className={classNames(style.Comment, {}, [className])}>
      <div className={style.userWrapper}>
        <AppLink to={getProfilePage(comment.user.id)} className={style.link}>
          <Avatar size={50} className={style.avatar} src={comment.user.avatar || DefaultAvatar} />
          <Text className={style.username} size='m' text={comment.user.username} />
        </AppLink>
      </div>
      <div data-testid='CommentCard.Text' className={style.text}>
        {comment.text}
      </div>
      {canDeleteComment && (
        <Button
          data-testid='CommentCard.DeleteButton'
          className={style.deleteBtn}
          theme={ButtonTheme.CLEAR}
          onClick={onRemoveComment}
        >
          <Svg className={style.cross} Svg={Cross} />
        </Button>
      )}
    </div>
  );
};
