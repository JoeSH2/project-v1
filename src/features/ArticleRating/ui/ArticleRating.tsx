import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entity/Rating';
import { getUserAuth } from '@/entity/User';
import { Skeleton } from '@/shared/ui/Skeleton';

import { useAddArticleRating, useGetArticleRating } from '../model/api/apiFetchArticleRating';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = props => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuth);

  const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
  const [addRating] = useAddArticleRating();

  const rating = data?.find(item => item.rate)?.rate;
  const userId = userData?.id ?? '';

  const onHandleSaveRate = useCallback(
    async (rate: number, feedback?: string) => {
      try {
        await addRating({ rate, articleId, userId, feedback });
      } catch (err) {
        console.error('Error addRate', err);
      }
    },
    [addRating, articleId, userId],
  );
  const onSend = useCallback(
    async (rate: number, feedback?: string) => {
      await onHandleSaveRate(rate, feedback);
    },
    [onHandleSaveRate],
  );
  const onCancel = useCallback(
    async (rate: number) => {
      await onHandleSaveRate(rate);
    },
    [onHandleSaveRate],
  );

  if (isLoading) {
    return <Skeleton width='100%' height='120px' rounded='1rem' />;
  }

  return (
    <div className={className}>
      <RatingCard
        title={t(`Rate this article`)}
        rate={rating}
        modalTitle={t('Leave a brief feedback about the article')}
        feedback
        onSend={onSend}
        onCancel={onCancel}
      />
    </div>
  );
};

export default ArticleRating;
