import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './NotificationItem.module.scss';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { NotificationOptions } from '../../model/types/NotificationOptions';

interface NotificationItemProps extends NotificationOptions {
  className?: string;
}

export const NotificationItem: FC<NotificationItemProps> = props => {
  const { className, href, title, userId, id, description } = props;

  const content = (
    <div className={classNames(style.NotificationItem, {}, [className])}>
      <VStack align='start' justify='justifyStart'>
        <Text className={style.title} align='left' size='m' title={title} />
        <Text className={style.description} align='left' size='m' text={description} />
      </VStack>
    </div>
  );

  if (href) {
    return (
      <a className={style.link} target='_blank' href={href} rel='noreferrer'>
        {content}
      </a>
    );
  }

  return content;
};
