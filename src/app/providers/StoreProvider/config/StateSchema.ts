import { AnyAction, CombinedState, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit';
import { Reducer } from 'react';
import { AxiosInstance } from 'axios';
import { apiRTK } from '@/shared/api/apiRTK';
import { CounterSchema } from '@/entity/Counter';
import { UserSchema } from '@/entity/User';
import { LoginUserScheme } from '@/features/AuthWithUsername';
import { ProfileSchema } from '@/features/editorProfile';
import { ArticleDetailsSchema } from '@/entity/Article';
import { CommentFormSchema } from '@/features/addComment';
import { articlePageSchema } from '@/pages/ArticlesPage';
import { SaveScrollPageSchema } from '@/features/saveScrollPage';
import { ArticleSortSchema } from '@/features/ArticleSort/model/types/ArticleSortSchema';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  // @ts-ignore
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
  add: (key: StateSchemaKey, reducer: Reducer<any, AnyAction>) => void;
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
