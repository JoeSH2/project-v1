import React, {
  FC, useCallback, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal/Portal';
import style from './Modal.module.scss';

interface ModalProps {
  className?: string;
  theme?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const clickContent = (e: any) => {
    e.stopPropagation();
  };

  const keyCloseModal = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );
  useEffect(() => {
    window.addEventListener('keydown', keyCloseModal);

    return () => {
      window.removeEventListener('keydown', keyCloseModal);
    };
  }, [onClose]);

  return (
    <Portal>
      <div className={classNames(style.Modal, { [style.open]: isOpen }, [className])}>
        <div onClick={onClose} className={style.overlay}>
          <div onClick={clickContent} ref={ref} className={style.wrapper}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
