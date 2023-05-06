import React, { CSSProperties, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import style from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({ className, src, alt, size, }) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size || 150,
    height: size || 150,
  }), [size]);

  return (
    <img
      style={styles}
      className={classNames(style.Avatar, {}, [className])}
      src={src}
      alt={alt}
    />
  );
};
