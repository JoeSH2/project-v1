import React, {
  FC, Suspense, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemesProvider';
import { AppRoutes } from './routes';
import { Navbare } from 'widgets/Navbare';
import { Sidebare } from 'widgets/Sidebare';
import { useDispatch } from 'react-redux';
import { userActions } from 'entity/User';
import './styles/index.scss';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

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
