import axios from 'axios/index';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { asyncLoginUser } from '@/features/AuthWithUsername';

jest.mock('axios');

const mockedAxisos = jest.mocked(axios);

test('login', async () => {
  const userValue = { username: 'admin', id: 1 };
  mockedAxisos.post.mockReturnValue(Promise.resolve({ data: userValue }));
  const thunk = new TestAsyncThunk(asyncLoginUser);
  const result = await thunk.callThunk({ username: 'admin', password: '123' });
  expect(mockedAxisos.post).toBeCalled();
  expect(result.payload).toEqual(userValue);
});

test('error', async () => {
  mockedAxisos.post.mockReturnValue(Promise.resolve({ status: 403 }));
  const thunk = new TestAsyncThunk(asyncLoginUser);
  const result = await thunk.callThunk({ username: '111', password: '111' });
  expect(mockedAxisos.post).toBeCalled();
  expect(result.meta.requestStatus).toBe('rejected');
});
