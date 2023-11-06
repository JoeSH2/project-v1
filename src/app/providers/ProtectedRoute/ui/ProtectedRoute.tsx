import { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuth, getUserRole, UserRole } from '@/entity/User';
import { RoutePath } from '@/shared/config/routeConfig/AppRoute';

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
    return <Navigate to={RoutePath.main} replace state={{ from: location }} />;
  }

  if (!hasReqRoles) {
    return <Navigate to={RoutePath.forbidden} replace state={{ from: location }} />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};
