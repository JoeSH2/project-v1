import { CountryList } from '@/entity/Country';
import { CurrencyList } from '@/entity/Currency';
import { Profile } from '@/entity/Profile';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

import { updateProfileData } from './updateProfileData';

const data: Profile = {
  age: 22,
  city: 'Moscow',
  country: CountryList.RUSSIA,
  currency: CurrencyList.RUB,
  first: 'Danila',
  username: 'admin',
  lastname: 'Kuzin',
  avatar: 'fake',
};

test('fetch data', async () => {
  const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
  thunk.api.put.mockReturnValue(Promise.resolve({ data }));
  const result = await thunk.callThunk();

  expect(thunk.api.put).toHaveBeenCalled();
  expect(result.meta.requestStatus).toBe('fulfilled');
  expect(result.payload).toEqual(data);
});

test('error fetch data', async () => {
  const thunk = new TestAsyncThunk(updateProfileData);
  thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
  const result = await thunk.callThunk();
  expect(result.meta.requestStatus).toBe('rejected');
});
