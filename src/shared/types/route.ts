import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line
import { UserRole } from '@/entity/User';

export type RouterAuth = RouteProps & {
  authUser?: boolean;
  roles?: UserRole[];
};
