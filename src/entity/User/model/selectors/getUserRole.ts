import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../model/types/UserSchema';

export const getUserRole = (state: StateSchema) => state.user.authData?.role;

export const isUserRoleAdmin = createSelector(getUserRole, roles => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserRoleManager = createSelector(getUserRole, roles => Boolean(roles?.includes(UserRole.MANAGER)));
