import { userActions } from 'entity/User';
import { getUserSelector } from 'entity/User/model/selectors/getUserSelector';
import { LoginModal } from 'features/AuthWithUsername';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import style from './Navbare.module.scss';

interface NavbareProps {
  className?: string;
}

export const Navbare: FC<NavbareProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { authData } = useSelector(getUserSelector);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const clickLogout = () => {
    dispatch(userActions.logout());
    onCloseModal();
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
      {
        authData
          ? <Button className={style.logBtn} theme={ButtonTheme.DEFAULT} onClick={clickLogout}>{t('Logout')}</Button>
          : (
            <>
              <Button
                className={style.logBtn}
                onClick={() => setIsOpenModal(true)}
                theme={ButtonTheme.DEFAULT}
              >
                {t('Sign in')}
              </Button>
              {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />}
            </>
          )
      }
    </div>
  );
};
