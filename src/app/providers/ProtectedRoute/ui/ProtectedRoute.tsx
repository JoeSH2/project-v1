import { getUserAuth } from 'entity/User';
import { FC, ReactElement, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/AppRoute';

interface ProtectedRouteProps {
   children: ReactNode
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuth);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} replace state={{ from: location }} />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        children
      }
    </>
  );
};
