import React, { FC, memo, ReactNode, useEffect } from 'react';
import { useTheme } from '@/app/providers/ThemesProvider';

import style from './Drawer.module.scss';
import { AnimationProvider, useAnimationLibs } from '../../../config/decorators/AnimationDecorator';
import { useModal } from '../../../hooks/useModal';
import { Button } from '../../Button';
import { Portal } from '../../Portal/Portal';
import { Overlay } from '../../Overlay/ui/Overlay';
import { classNames } from '../../../lib/classNames/classNames';

interface DrawerProps {
  className?: string;
  classNameBtn?: string;
  theme?: string;
  children: ReactNode;
  value?: ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  lazy?: boolean;
}

const heightDrawer = window.innerHeight - 100;

const DrawerContent: FC<DrawerProps> = memo((props: DrawerProps) => {
  const { className, classNameBtn, onOpen, value, lazy, children, isOpen, onClose } = props;
  const { isMounted } = useModal(onClose, isOpen);
  const { theme } = useTheme();
  const { Gesture, Spring } = useAnimationLibs();
  const [{ y }, set] = Spring.useSpring(() => ({ y: 0 }));

  const open = ({ canceled }: any) => {
    set({ y: 0, immediate: false, config: canceled ? Spring.config.wobbly : Spring.config.stiff });
  };
  const close = (velocity = 0) => {
    set({ y: heightDrawer, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: onClose });
  };

  const bind = Gesture.useDrag(
    ({ last, direction: [, dy], velocity: [, vy], movement: [, my], cancel, canceled }) => {
      if (my < -70) cancel();
      if (last) {
        if (my > heightDrawer * 0.4 || (vy > 1 && dy > 0)) {
          close();
        } else {
          open({ canceled });
        }
      } else {
        set({ y: my, immediate: true });
      }
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true },
  );

  useEffect(() => {
    if (isOpen) {
      open(true);
    }
  }, [isOpen]);

  const display = y.to(py => (py < heightDrawer ? 'block' : 'none'));

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <div>
      {value && (
        <Button className={classNameBtn} onClick={onOpen}>
          {value}
        </Button>
      )}
      {isOpen && (
        <Portal>
          <div className={classNames(style.Drawer, { [style.open]: isOpen }, [className, theme])}>
            <Overlay onClose={() => close()} />
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Spring.animated.div
              className={style.wrapper}
              style={{
                display,
                bottom: '-100px',
                height: `${heightDrawer}px`,
                y,
              }}
              {...bind()}
            >
              {children}
            </Spring.animated.div>
          </div>
        </Portal>
      )}
    </div>
  );
});

const DrawerLoading: FC<DrawerProps> = memo((props: DrawerProps) => {
  const { isLoading } = useAnimationLibs();
  const { children } = props;
  if (!isLoading) {
    return null;
  }

  return <DrawerContent {...props}>{children}</DrawerContent>;
});

export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
  const { children } = props;

  return (
    <AnimationProvider>
      <DrawerLoading {...props}>{children}</DrawerLoading>
    </AnimationProvider>
  );
});
