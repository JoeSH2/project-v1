import { CountryList } from '@/entity/Country';
import { CurrencyList } from '@/entity/Currency';
import { Profile } from '@/entity/Profile';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

test('fetch data', async () => {
  const data: Profile = {
    age: 22,
    city: 'Moscow',
    country: CountryList.RUSSIA,
    currency: CurrencyList.RUB,
    first: 'Danila',
    username: 'admin',
    lastname: 'Kuzin',
    avatar: 'asdasda',
  };
  const thunk = new TestAsyncThunk(fetchProfileData);
  thunk.api.get.mockReturnValue(Promise.resolve({ data }));
  const result = await thunk.callThunk('1');
  expect(thunk.api.get).toHaveBeenCalled();
  expect(result.meta.requestStatus).toBe('fulfilled');
  expect(result.payload).toEqual(data);
});

test('error fetch data', async () => {
  const thunk = new TestAsyncThunk(fetchProfileData);
  thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
  const result = await thunk.callThunk('1');
  expect(result.meta.requestStatus).toBe('rejected');
});
