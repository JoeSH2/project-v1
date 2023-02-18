import React, { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemesProvider';
import './styles/index.scss';
import { AppRoutes } from './routes';
import { Navbare } from 'widgets/Navbare';
import { Sidebare } from 'widgets/Sidebare';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbare />
        <div className="content-page">
          <Sidebare />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
};
