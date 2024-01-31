import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entity/User';

export type RouterAuth = RouteProps & {
  authUser?: boolean;
  roles?: UserRole[];
};
