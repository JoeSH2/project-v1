import React, { FC } from 'react';

import style from './Modal.module.scss';
import { useModal } from '../../../hooks/useModal';
import { classNames } from '../../../lib/classNames/classNames';
import { Overlay } from '../../Overlay/ui/Overlay';
import { Portal } from '../../Portal';

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose, lazy }) => {
  const { isMounted } = useModal(onClose, isOpen);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(style.Modal, { [style.open]: isOpen }, [className])}>
        <Overlay onClose={onClose} />
        <div className={style.wrapper}>{children}</div>
      </div>
    </Portal>
  );
};
