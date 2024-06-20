import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelectors } from '@/shared/lib/buildRedux';

export const [useCounterValue, getCounterValue] = buildSelectors((state: StateSchema) => state.counter.value);
