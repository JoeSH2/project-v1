import { CombinedState, configureStore, Reducer, ReducersMapObject, } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { saveScrollPageReducer } from 'features/saveScrollPage';
import { $axiosApi } from 'shared/api/api';

import { apiRTK } from "shared/api/apiRTK";
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
	initialState: StateSchema,
	asyncRedusers?: ReducersMapObject<StateSchema>,
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncRedusers,
		counter: counterReducer,
		user: userReducer,
		saveScroll: saveScrollPageReducer,
		[apiRTK.reducerPath]: apiRTK.reducer,

	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		preloadedState: initialState,
		devTools: __IS_DEV__,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: { extraArgument: { api: $axiosApi, }, },
		}).concat(apiRTK.middleware),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
