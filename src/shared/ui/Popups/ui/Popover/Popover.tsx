import { FC, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '../../../../lib/classNames/classNames';
import { PositionPopup } from '../../styles/consts';

import popupStyle from '../../styles/popups.module.scss';
import style from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  value?: string | ReactNode;
  position?: PositionPopup;
  children?: ReactNode;
}

export const Popover: FC<PopoverProps> = ({ className, children, value, position = 'bottomRight' }) => (
  <HPopover className={style.popover}>
    <HPopover.Button className={style.button}>{value}</HPopover.Button>
    <HPopover.Panel as='ul' className={classNames(style.list, {}, [popupStyle[position], className])}>
      {children}
    </HPopover.Panel>
  </HPopover>
);
