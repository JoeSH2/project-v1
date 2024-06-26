import React, { CSSProperties, FC, useMemo } from 'react';

import { classNames } from '../../../lib/classNames/classNames';
import { AppImage } from '../../AppImage';

import style from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({ className, src, alt, size }) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 150,
      height: size || 150,
    }),
    [size],
  );

  return <AppImage style={styles} className={classNames(style.Avatar, {}, [className])} src={src} alt={alt} />;
};
