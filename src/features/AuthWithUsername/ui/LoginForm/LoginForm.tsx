import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { getLoginUser } from 'features/AuthWithUsername/model/selectors/getLoginUser';
import { loginUserActions } from 'features/AuthWithUsername/model/slice/loginUserSlice';
import { asyncLoginUser } from 'features/AuthWithUsername';
import { useDispatch, useSelector } from 'react-redux';

interface LoginFormProps {
  className?: string;
  theme?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch: any = useDispatch();
  const {
    password, username, isLoading, error,
  } = useSelector(getLoginUser);

  const onChangeLogin = useCallback((value: string) => {
    dispatch(loginUserActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginUserActions.setPassword(value));
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    dispatch(asyncLoginUser({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={style.LoginForm}>
      <h3 className={style.title}>
        {t('Sing in with')}
      </h3>
      <form className={classNames(style.form, {}, [className])}>
        <div className={style.wrapperInput}>
          <label className={style.label} htmlFor="login">{t('Login')}</label>
          <Input onChange={onChangeLogin} value={username} autofocus theme="default" className={style.input} />
        </div>
        <div className={style.wrapperInput}>
          <label className={style.label} htmlFor="password">{t('Password')}</label>
          <Input onChange={onChangePassword} value={password} theme="default" className={style.input} type="password" />
        </div>
        {error && <Text className={style.errorText} theme="red" text={t(error)} />}
        <Button
          onClick={onClickLogin}
          disabled={isLoading}
          className={style.loginBtn}
          theme={ButtonTheme.DEFAULT}
        >
          {t('Sign in')}
        </Button>
      </form>
    </div>
  );
});
