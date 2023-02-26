import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import style from './Navbare.module.scss';

interface NavbareProps {
  className?: string;
  theme?: string;
}

export const Navbare: FC<NavbareProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={classNames(style.Navbare, {}, [className])}>
      <div className={style.linkWrapper}>
        <AppLink to="/" theme={AppLinkTheme.DARK}>
          {t('Main page')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.DEFAULT}>
          {t('About us')}
        </AppLink>
      </div>
      <Button onClick={() => setIsOpenModal(true)} theme={ButtonTheme.CLEAR}>{t('Sign in')}</Button>
      <Modal isOpen={isOpenModal} onClose={onCloseModal}>{t('Lorem ipsum dolor sit amet.')}</Modal>
    </div>
  );
};
