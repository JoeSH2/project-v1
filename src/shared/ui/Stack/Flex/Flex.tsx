import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './Flex.module.scss';

type FlexAlign = 'center' | 'end' | 'start';
type FlexJustify = 'justifyStart' | 'justifyBetween' | 'justifyEnd' | 'justifyCenter';
type FlexDirection = 'row' | 'column';
type FlexGap = 'gap2' | 'gap4' | 'gap8' | 'gap16' | 'gap24' | 'gap32';

export interface FlexProps {
  children: ReactNode;
  className?: string;
  align?: FlexAlign;
  justify?: FlexJustify;
  direction?: FlexDirection;
  wrap?: boolean;
  gap?: FlexGap;
  full?: boolean;
  htmlStyle?: 'ul' | 'nav' | 'aside' | 'main' | 'section';
}

export const Flex: FC<FlexProps> = props => {
  const {
    children,
    htmlStyle,
    full,
    align = 'center',
    justify = 'start',
    className,
    direction = 'row',
    gap,
    wrap,
  } = props;

  const classArray = [className, style[align], style[justify], style[direction], gap && style[gap]];

  if (htmlStyle === 'aside') {
    return (
      <aside className={classNames(style.Flex, { [style.wrap]: wrap, [style.full]: full }, classArray)}>
        {children}
      </aside>
    );
  }

  if (htmlStyle === 'nav') {
    return (
      <nav className={classNames(style.Flex, { [style.wrap]: wrap, [style.full]: full }, classArray)}>{children}</nav>
    );
  }

  if (htmlStyle === 'ul') {
    return (
      <ul className={classNames(style.Flex, { [style.wrap]: wrap, [style.full]: full }, classArray)}>{children}</ul>
    );
  }

  if (htmlStyle === 'main') {
    return (
      <main className={classNames(style.Flex, { [style.wrap]: wrap, [style.full]: full }, classArray)}>{children}</main>
    );
  }

  if (htmlStyle === 'section') {
    return (
      <section className={classNames(style.Flex, { [style.wrap]: wrap, [style.full]: full }, classArray)}>
        {children}
      </section>
    );
  }

  return (
    <div className={classNames(style.Flex, { [style.wrap]: wrap, [style.full]: full }, classArray)}>{children}</div>
  );
};
