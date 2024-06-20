import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClose: () => void;
}

export const Overlay: FC<OverlayProps> = props => {
  const { className, onClose } = props;

  return <div onClick={onClose} className={classNames(style.Overlay, {}, [className])} />;
};
