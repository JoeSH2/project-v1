import { FC, Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './MenuDrop.module.scss';
import popupStyles from '../../styles/popups.module.scss';
import { PositionPopup } from '@/shared/ui/Popups/styles/consts';
import { AppLink } from '@/shared/ui/AppLink';

export type MenuDropOptions = {
  onClick?: () => void;
  href?: string;
  content: string | ReactNode;
  disable?: boolean;
};

interface MenuDropProps {
  className?: string;
  value?: string | ReactNode;
  items: MenuDropOptions[];
  position?: PositionPopup;
}

export const MenuDrop: FC<MenuDropProps> = (props: MenuDropProps) => {
  const { className, items, value, position = 'bottom' } = props;
  const { t } = useTranslation();
  return (
    <Menu as='div' className={classNames(style.MenuDrop, {}, [className])}>
      <Menu.Button className={style.button}>{value}</Menu.Button>
      <Transition
        enter={popupStyles.enter}
        enterFrom={popupStyles.enterFrom}
        enterTo={popupStyles.enterTo}
        leave={popupStyles.leave}
        leaveFrom={popupStyles.leaveFrom}
        leaveTo={popupStyles.leaveTo}
      >
        <Menu.Items as='ul' className={classNames(style.list, {}, [popupStyles[position]])}>
          {items.map((item, i) => {
            const content = ({ active }: { active: boolean }) => {
              if (item.href) {
                return (
                  <AppLink to={item.href} className={classNames(style.item, {}, [])}>
                    {item.content}
                  </AppLink>
                );
              }
              return (
                <button type='button' onClick={item.onClick} className={classNames(style.item, {}, [])}>
                  {item.content}
                </button>
              );
            };

            return (
              <Menu.Item key={`${item} ${i}`} as={Fragment}>
                {content}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
