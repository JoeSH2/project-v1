import { IProfileRating } from '@/entity/Rating';
import { apiRTK } from '@/shared/api/apiRTK';

interface ProfileRatingProps {
  profileId: string;
  userId: string;
}

interface AddProfileRatingProps extends ProfileRatingProps {
  rate: number;
}

const apiFetchProfileRating = apiRTK.injectEndpoints({
  endpoints: build => ({
    getProfileRating: build.query<IProfileRating[], ProfileRatingProps>({
      query: ({ profileId, userId }) => ({
        url: '/profiles-rating',
        params: {
          profileId,
          userId,
        },
      }),
    }),
    addProfileRating: build.mutation<void, AddProfileRatingProps>({
      query: ({ profileId, userId, rate }) => ({
        url: '/profiles-rating',
        method: 'POST',
        body: {
          profileId,
          userId,
          rate,
        },
      }),
    }),
  }),
});
export const useGetProfileRating = apiFetchProfileRating.useGetProfileRatingQuery;
export const useAddProfileRating = apiFetchProfileRating.useAddProfileRatingMutation;
