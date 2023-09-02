import { AnyAction, CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { EnhancedStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entity/Article';
import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { CommentFormSchema } from 'features/addComment';
import { ArticleSortSchema } from 'features/ArticleSort/model/types/ArticleSortSchema';
import { LoginUserScheme } from 'features/AuthWithUsername';
import { SaveScrollPageSchema } from 'features/saveScrollPage';
import { articlePageSchema } from 'pages/ArticlesPage';
import { ArticleDetailsPageSchema } from 'pages/AtriclesDetailsPage';
import { apiRTK } from 'shared/api/apiRTK';
import { ProfileSchema } from 'features/editorProfile';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  [apiRTK.reducerPath]: ReturnType<typeof apiRTK.reducer>;

  // async reducers
  loginUser?: LoginUserScheme;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  commentForm?: CommentFormSchema;
  articlePage?: articlePageSchema;
  saveScroll: SaveScrollPageSchema;
  articleSort?: ArticleSortSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
