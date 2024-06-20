import React, { FC, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchGetUserById, getUserMounted } from '@/entity/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbare } from '@/widgets/Navbare';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebare } from '@/widgets/Sidebare';

import { AppRoute } from './routes';

import './styles/index.scss';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(fetchGetUserById());
  }, [dispatch]);

  if (!mounted) {
    return <PageLoader />;
  }

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
