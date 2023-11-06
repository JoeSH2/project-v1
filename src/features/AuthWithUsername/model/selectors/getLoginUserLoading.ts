import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginUserLoading = (state: StateSchema) => state?.loginUser?.isLoading || false;
