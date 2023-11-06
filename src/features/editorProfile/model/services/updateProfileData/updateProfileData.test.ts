import { CountryList } from '@/entity/Country';
import { CurrencyList } from '@/entity/Currency';
import { Profile } from '@/entity/Profile';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { updateProfileData } from '@/features/editorProfile/model/services/updateProfileData/updateProfileData';

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
  const thunk = new TestAsyncThunk(updateProfileData, { profile: { data } });
  thunk.api.put.mockReturnValue(Promise.resolve({ data }));
  const result = await thunk.callThunk();

  expect(thunk.api.put).toHaveBeenCalled();
  expect(result.payload).toEqual(data);
  expect(result.meta.requestStatus).toBe('fulfilled');
});

test('error fetch data', async () => {
  const thunk = new TestAsyncThunk(updateProfileData);
  thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
  const result = await thunk.callThunk();
  expect(result.meta.requestStatus).toBe('rejected');
});
