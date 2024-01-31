import React, { FC, SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import style from './Svg.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Svg: FC<IconProps> = props => {
  const { className, Svg, ...otherProps } = props;

  return <Svg className={classNames(style.icon, {}, [className])} {...otherProps} />;
};
