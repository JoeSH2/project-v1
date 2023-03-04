import {
  AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { EnhancedStore, ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { LoginUserScheme } from 'features/AuthWithUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginUser?: LoginUserScheme;
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
  }
export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
