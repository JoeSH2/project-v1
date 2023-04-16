import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUserStatus = (state: StateSchema) => state?.loginUser?.status || 'pending';
