import { apiRTK } from '@/shared/api/apiRTK';
import { NotificationOptions } from '../types/NotificationOptions';

export const apiNotifications = apiRTK.injectEndpoints({
  endpoints: build => ({
    getApiNotifications: build.query<NotificationOptions[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});
export const useApiNotifications = apiNotifications.useGetApiNotificationsQuery;
