import { AnyAction, AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

type ActionCreatorType<Return, Args, RejectValue> = (args: Args) => AsyncThunkAction<Return, Args, {rejectValue: RejectValue}>

export class TestAsyncThunk<Return, Args, RejectValue> {
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Args, RejectValue>;

  constructor(actionCreator: ActionCreatorType<Return, Args, RejectValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, undefined);
    return result;
  }
}
