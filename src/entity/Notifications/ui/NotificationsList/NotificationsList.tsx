import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';

import style from './NotificationsList.module.scss';
import { useApiNotifications } from '../../model/api/apiNotifications';
import { getUserAuth } from '../../../User/model/selectors/getUserAuth';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';

export const NotificationsList: FC = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useApiNotifications(null);
  const authData = useSelector(getUserAuth);

  if (isLoading) {
    return (
      <VStack className={style.wrapper} gap='gap8'>
        <Text className={style.title} align='left' size='m' title={t('Check for notifications...')} />
        {new Array(4).fill(0).map((item, i) => (
          <Skeleton key={i} rounded='0.3rem' marginBottom='10px' height='60px' width='100%' />
        ))}
      </VStack>
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data ? (
        <VStack className={style.wrapper} gap='gap16'>
          <Text theme='theme' className={style.title} align='left' size='m' title={t("You've been notified!")} />
          {data
            .filter(notification => notification.userId === authData?.id)
            .map(notification => (
              <NotificationItem
                userId={notification.userId}
                id={notification.id}
                description={notification.description}
                title={notification.title}
                href={notification.href}
                key={notification.id}
              />
            ))}
        </VStack>
      ) : (
        <VStack className={style.wrapper} gap='gap8'>
          <Text
            theme='inverted'
            className={style.title}
            align='left'
            size='l'
            text={t("You don't have any notifications")}
          />
        </VStack>
      )}
    </>
  );
};
