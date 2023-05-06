import { useTheme } from 'app/providers/ThemesProvider';
import React, {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

import style from './Modal.module.scss';

interface ModalProps {
  className?: string;
  theme?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose, lazy, }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

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
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', keyCloseModal);

    return () => {
      window.removeEventListener('keydown', keyCloseModal);
    };
  }, [onClose]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(style.Modal, { [style.open]: isOpen }, [className, theme])}>
        <div onClick={onClose} className={style.overlay}>
          <div onClick={clickContent} ref={ref} className={style.wrapper}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
