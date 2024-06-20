import React, { FC, memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouterAuth } from '@/shared/types/route';
import { PageLoader } from '@/widgets/PageLoader';

import { ProtectedRoute } from '../../providers/ProtectedRoute';
import { routesConfig } from '../config/routeConfig';

const AppRoute: FC = memo(() => {
  const renderWithRouter = useCallback((route: RouterAuth) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authUser ? <ProtectedRoute roles={route.roles}>{element}</ProtectedRoute> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routesConfig).map(renderWithRouter)}</Routes>;
});

export default memo(AppRoute);
