import { CSSProperties, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import style from './Skeleton.module.scss';

interface SkeletonProps {
   className?: string;
   width?: string;
   height?: string;
   rounded?: string | number;
   marginLeft?: string | number;
   marginRight?: string | number;
   marginTop?: string | number;
   marginBottom?: string | number;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
  const {
    className,
    width,
    height,
    rounded,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  } = props;

  const styleMods: CSSProperties = {
    width,
    height,
    borderRadius: rounded,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  };

  return (
    <span className={classNames(style.Skeleton, {}, [className])} style={styleMods} />
  );
};
