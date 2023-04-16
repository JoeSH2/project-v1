import { getProfileData } from 'entity/Profile';
import { getArticleDetailsCommentsLoading } from 'pages/AtriclesDetailsPage/model/selectors/comments';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import DefaultAvatar from 'shared/assets/icon/default-avatar.jpg';
import { RoutePath } from 'shared/config/routeConfig/AppRoute';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';

import { Comment } from '../../model/types/comment';
import style from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = ({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <div className={classNames(style.Comment, {}, [className])}>
        <div className={style.userWrapper}>
          <Skeleton className={style.avatar} height="50px" width="50px" rounded="50%" />
          <Skeleton className={style.username} height="24px" width="100px" />
        </div>
        <div className={style.wrapperTextSkeleton}>
          <Skeleton height="12px" width="100%" />
          <Skeleton height="12px" width="300px" />
        </div>
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(style.Comment, {}, [className])}>
      <div className={style.userWrapper}>
        <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={style.link}>
          <Avatar size={50} className={style.avatar} src={comment.user.avatar || DefaultAvatar} />
          <Text className={style.username} size="m" text={comment.user.username} />
        </AppLink>
      </div>
      <Text size="m" align="left" className={style.text} text={comment.text} />
    </div>
  );
};
