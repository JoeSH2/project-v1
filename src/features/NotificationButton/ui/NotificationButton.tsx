import { FC, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationsList } from '@/entity/Notifications';
import NotificationIcon from '@/shared/assets/icon/notification.svg';
import { Drawer } from '@/shared/ui/Drawer';
import { Popover } from '@/shared/ui/Popups';
import { Svg } from '@/shared/ui/Svg/ui/Svg';

import style from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrowserView>
        <Popover position='bottomLeft' value={<Svg className={style.notification} Svg={NotificationIcon} />}>
          <NotificationsList />
        </Popover>
      </BrowserView>
      <MobileView>
        <Drawer
          classNameBtn={style.btnDrawer}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          isOpen={open}
          value={<Svg className={style.notification} Svg={NotificationIcon} />}
        >
          <NotificationsList />
        </Drawer>
      </MobileView>
    </>
  );
};
