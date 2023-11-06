import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Svg.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Svg: FC<IconProps> = props => {
  const { className, Svg } = props;

  return <Svg className={classNames(style.icon, {}, [className])} />;
};
