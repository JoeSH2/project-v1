import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileErrorForm = (state: StateSchema) => state?.profile?.validateForm;
