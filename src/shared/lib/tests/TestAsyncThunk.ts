import { AnyAction, AsyncThunkAction, DeepPartial, ThunkDispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<Return, Args, RejectValue> = (
  args: Args,
) => AsyncThunkAction<Return, Args, { rejectValue: RejectValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Args, RejectValue> {
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Args, RejectValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(actionCreator: ActionCreatorType<Return, Args, RejectValue>, state?: DeepPartial<StateSchema>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.actionCreator = actionCreator;
    this.api = mockedAxios;
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, { api: this.api });
    return result;
  }
}
