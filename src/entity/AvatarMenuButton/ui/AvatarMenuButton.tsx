import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import style from './AvatarMenuButton.module.scss';
import { MenuDrop } from '@/shared/ui/Popups';
import { getUserAuth, isUserRoleAdmin, isUserRoleManager, userActions } from '@/entity/User';
import { MenuDropOptions } from '@/shared/ui/Popups/ui/MenuDrop/MenuDrop';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { RoutePath } from '@/app/routes/config/routeConfig';

interface AvatarMenuButtonProps {
  className?: string;
}

export const AvatarMenuButton: FC<AvatarMenuButtonProps> = props => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuth);
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserRoleAdmin);
  const isManager = useSelector(isUserRoleManager);
  const userRoleTrue = isAdmin || isManager;
  const clickLogout = () => {
    dispatch(userActions.logout());
  };

  const optionsMenu: MenuDropOptions[] = [
    ...(userRoleTrue
      ? [
          {
            content: t('Admin panel'),
            // eslint-disable-next-line no-unsafe-optional-chaining
            href: RoutePath.admin,
          },
        ]
      : []),
    {
      content: t('Profile'),
      // eslint-disable-next-line no-unsafe-optional-chaining
      href: RoutePath.profile + authData?.id,
    },
    {
      content: t('Create article'),
      href: RoutePath.article_create,
    },
    {
      content: t('Log out'),
      onClick: clickLogout,
    },
  ];

  return (
    <HStack gap='gap24'>
      <MenuDrop
        position='bottomLeft'
        className={style.menuBtn}
        value={<Avatar size={48} alt='avatar' src={authData?.avatar} />}
        items={optionsMenu}
      />
      <Button className={style.logBtn} onClick={clickLogout}>
        {t('Logout')}
      </Button>
    </HStack>
  );
};
