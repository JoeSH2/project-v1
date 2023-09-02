import { getUserAuth, isUserRoleAdmin, isUserRoleManager, userActions } from 'entity/User';
import { LoginModal } from 'features/AuthWithUsername';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import LogoIcon from 'shared/assets/icon/LOGO.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { MenuDrop, MenuDropOptions } from 'shared/ui/MenuDrop/MenuDrop';
import { RoutePath } from 'shared/config/routeConfig/AppRoute';
import { Avatar } from 'shared/ui/Avatar';
import style from './Navbare.module.scss';

interface NavbareProps {
  className?: string;
}

export const Navbare: FC<NavbareProps> = memo(({ className }: NavbareProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const authData = useSelector(getUserAuth);
  const isAdmin = useSelector(isUserRoleAdmin);
  const isManager = useSelector(isUserRoleManager);
  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const clickLogout = () => {
    dispatch(userActions.logout());
    onCloseModal();
  };

  const userRoleTrue = isAdmin || isManager;

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
    <div className={classNames(style.Navbare, {}, [className])}>
      <div className={style.linkWrapper}>
        <LogoIcon className={style.logo} />
        <Text size='xl' className={style.title} title={t('TIOL')} />
      </div>
      {authData ? (
        <div className={style.wrapperLog}>
          <MenuDrop
            position='bottomLeft'
            className={style.menuBtn}
            value={<Avatar size={48} alt='avatar' src={authData.avatar} />}
            items={optionsMenu}
          />
          <Button className={style.logBtn} onClick={clickLogout}>
            {t('Logout')}
          </Button>
        </div>
      ) : (
        <>
          <Button className={style.logBtn} onClick={() => setIsOpenModal(true)}>
            {t('Sign in')}
          </Button>
          {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />}
        </>
      )}
    </div>
  );
});
