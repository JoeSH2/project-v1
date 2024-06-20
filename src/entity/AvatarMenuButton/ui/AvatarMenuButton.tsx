import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuth, isUserRoleAdmin, isUserRoleManager, userActions } from '@/entity/User';
import { getAdminPage, getArticleCreatePage, getProfilePage } from '@/shared/const/route';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { MenuDrop } from '@/shared/ui/Popups';
import { MenuDropOptions } from '@/shared/ui/Popups/ui/MenuDrop/MenuDrop';
import { HStack } from '@/shared/ui/Stack';

import style from './AvatarMenuButton.module.scss';

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
    window.location.reload();
  };

  const optionsMenu: MenuDropOptions[] = [
    ...(userRoleTrue
      ? [
          {
            content: t('Admin panel'),
            // eslint-disable-next-line no-unsafe-optional-chaining
            href: getAdminPage(),
          },
        ]
      : []),
    {
      content: t('Profile'),
      href: authData && getProfilePage(authData.id),
    },
    {
      content: t('Create article'),
      href: getArticleCreatePage(),
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
