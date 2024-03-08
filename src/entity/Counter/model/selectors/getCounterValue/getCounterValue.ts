import { buildSelectors } from '@/shared/lib/buildRedux';
import { StateSchema } from '@/app/providers/StoreProvider';

export const [useCounterValue, getCounterValue] = buildSelectors((state: StateSchema) => state.counter.value);
