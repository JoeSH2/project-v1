import React, { FC, Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemesProvider';
import { AppRoutes } from './routes';
import { Navbare } from 'widgets/Navbare';
import { Sidebare } from 'widgets/Sidebare';
import { Modal } from 'shared/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import './styles/index.scss';

export const App: FC = () => {
  const { theme } = useTheme();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbare />
        <Button onClick={() => setIsOpenModal(true)} theme={ButtonTheme.CLEAR}>Open Modal</Button>
        <Modal isOpen={isOpenModal} onClose={onCloseModal}>Lorem ipsum dolor sit amet.</Modal>
        <div className="content-page">
          <Sidebare />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
};
