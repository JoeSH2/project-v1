import { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuth, getUserRole,UserRole } from '@/entity/User';
import { getForbiddenPage, getMainPage } from '@/shared/const/route';

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: UserRole[];
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, roles }) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuth);
  const userRoles = useSelector(getUserRole);

  const hasReqRoles = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some(role => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to={getMainPage()} state={{ from: location }} replace />;
  }

  if (!hasReqRoles) {
    return <Navigate to={getForbiddenPage()} replace state={{ from: location }} />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};
