import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { UserRole } from '../consts';

export const getUserRole = (state: StateSchema) => state.user.authData?.role;

export const isUserRoleAdmin = createSelector(getUserRole, roles => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserRoleManager = createSelector(getUserRole, roles => Boolean(roles?.includes(UserRole.MANAGER)));
