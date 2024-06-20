import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelectors } from '@/shared/lib/buildRedux';

export const [useGetJsonSettings, getJsonSettings] = buildSelectors(
  (state: StateSchema) => state.user?.authData?.jsonSettings,
);
