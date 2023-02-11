import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/routeConfig/AppRoute';

export const AppRoutes: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routesConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
