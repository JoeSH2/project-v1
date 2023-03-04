import React, {
  FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginUserError } from '../../model/selectors/getLoginUsereError';
import { getLoginUserLoading } from '../../model/selectors/getLoginUserLoading';
import { getLoginUserPassword } from '../../model/selectors/getLoginUserPassword';
import { loginUserActions, loginUserReducer } from '../../model/slice/loginUserSlice';
import { asyncLoginUser } from '../..';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerList, useAsyncWrapperReducer } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';

const listState: ReducerList = {
  loginUser: loginUserReducer,
};
export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch: any = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginUserPassword);
  const error = useSelector(getLoginUserError);
  const isLoading = useSelector(getLoginUserLoading);

  const onChangeLogin = useCallback((value: string) => {
    dispatch(loginUserActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginUserActions.setPassword(value));
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    dispatch(asyncLoginUser({ username, password }));
  }, [dispatch, password, username]);

  useAsyncWrapperReducer(listState);

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
        {error && <Text className={style.errorText} theme="red" text={t('Wrong login or password, try again!')} />}
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

export default LoginForm;
