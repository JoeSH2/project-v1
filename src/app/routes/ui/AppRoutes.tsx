import { ProtectedRoute } from 'app/providers/ProtectedRoute';
import React, { FC, memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterAuth, routesConfig } from 'shared/config/routeConfig/AppRoute';
import { PageLoader } from 'widgets/PageLoader';

export const AppRoutes: FC = memo(() => {
  const renderWithRouter = useCallback((route: RouterAuth) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authUser ? <ProtectedRoute roles={route.roles}>{element}</ProtectedRoute> : element}
      />
    );
  }, []);

  return (
    <Suspense fallback=''>
      <Routes>
        {Object.values(routesConfig).map(renderWithRouter)}
        {/* {routes.map(({ element, path }) => (
          <Route key={path} path={path} element={<Suspense fallback={<PageLoader />}>{element}</Suspense>} />
        ))} */}
      </Routes>
    </Suspense>
  );
});
