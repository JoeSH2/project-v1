import React, { FC, memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/app/providers/ProtectedRoute';
import { PageLoader } from '@/widgets/PageLoader';
import { routesConfig } from '@/app/routes/config/routeConfig';
import { RouterAuth } from '@/shared/types/route';

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
