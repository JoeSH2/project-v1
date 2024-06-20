import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entity/Rating';
import { getUserAuth } from '@/entity/User';

import { useAddProfileRating, useGetProfileRating } from '../model/api/apiFetchProfileRating';

import style from './ProfileRating.module.scss';

interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

export const ProfileRating: FC<ProfileRatingProps> = props => {
  const { className, profileId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuth);
  const { data, isLoading } = useGetProfileRating({ profileId, userId: userData?.id ?? '' });
  const [addProfileRating] = useAddProfileRating();
  const rate = data?.find(item => item.rate)?.rate;

  const onSend = useCallback(
    async (rate: number) => {
      try {
        await addProfileRating({ rate, profileId, userId: userData?.id ?? '' });
      } catch (e) {
        console.log(e);
      }
    },
    [addProfileRating, profileId, userData?.id],
  );

  if (isLoading) {
    return null;
  }

  if (userData?.id === profileId) {
    return null;
  }

  console.log(data);

  return (
    <RatingCard
      size={42}
      className={style.rating}
      feedback={false}
      onCancel={onSend}
      rate={rate}
      title={t('Rate thе user profile')}
    />
  );
};
