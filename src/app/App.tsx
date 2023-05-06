import './styles/index.scss';

import { userActions } from 'entity/User';
import { getUserMounted } from 'entity/User/model/selectors/getUserMounted';
import React, { FC, Suspense, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbare } from 'widgets/Navbare';
import { Sidebare } from 'widgets/Sidebare';

import { useTheme } from './providers/ThemesProvider';
import { AppRoutes } from './routes';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbare />
        <div className="content-page">
          <Sidebare />
          {mounted && <AppRoutes />}
        </div>
      </Suspense>
    </div>
  );
};
