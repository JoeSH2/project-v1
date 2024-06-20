import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AvatarMenuButton } from '@/entity/AvatarMenuButton';
import { getUserAuth } from '@/entity/User';
import { LoginModal } from '@/features/AuthWithUsername';
import { NotificationButton } from '@/features/NotificationButton';
import LogoIcon from '@/shared/assets/icon/LOGO.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import style from './Navbare.module.scss';

interface NavbareProps {
  className?: string;
}

export const Navbare: FC<NavbareProps> = memo(({ className }: NavbareProps) => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const authData = useSelector(getUserAuth);
  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={classNames(style.Navbare, {}, [className])}>
      <div className={style.linkWrapper}>
        <LogoIcon className={style.logo} />
        <Text size='xl' className={style.title} title={t('TIOL')} />
      </div>
      {authData ? (
        <HStack gap='gap24' className={style.wrapperLog}>
          <NotificationButton />
          <AvatarMenuButton />
        </HStack>
      ) : (
        <HStack className={style.wrapperLog} gap='gap16'>
          <Button className={style.logBtn} onClick={() => setIsOpenModal(true)}>
            {t('Sign in')}
          </Button>
          {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />}
        </HStack>
      )}
    </div>
  );
});
