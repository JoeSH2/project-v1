import { apiRTK } from '@/shared/api/apiRTK';

import { User } from '../..';
import { JsonSettings } from '../types/JsonSettings';

export interface UserJsonSettingsProps {
  userId: string;
  jsonSettings: JsonSettings;
}

const apiUserJsonSettings = apiRTK.injectEndpoints({
  endpoints: build => ({
    patchJsonSettings: build.mutation<User, UserJsonSettingsProps>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
    getUserById: build.query<User, string>({
      query: id => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
  }),
});
export const patchJsonSettings = apiUserJsonSettings.endpoints.patchJsonSettings.initiate;
export const getUserById = apiUserJsonSettings.endpoints.getUserById.initiate;
