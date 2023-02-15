import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/routeConfig/AppRoute';
import { PageLoader } from 'widgets/PageLoader';

export const AppRoutes: FC = () => (
  <Suspense fallback="">
    <Routes>
      {Object.values(routesConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={<Suspense fallback={<PageLoader />}>{element}</Suspense>} />
      ))}
    </Routes>
  </Suspense>
);
