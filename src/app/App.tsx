import './styles/index.scss';
import React, { FC, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserMounted, userActions } from '@/entity/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbare } from '@/widgets/Navbare';
import { Sidebare } from '@/widgets/Sidebare';
import { AppRoute } from './routes';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbare />
        <div className='content-page'>
          <Sidebare />
          {mounted && <AppRoute />}
        </div>
      </Suspense>
    </div>
  );
};
