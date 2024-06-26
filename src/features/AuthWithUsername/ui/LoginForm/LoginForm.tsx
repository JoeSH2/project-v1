import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ReducerList,
  useAsyncWrapperReducer,
} from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import { getLoginUserError } from '../../model/selectors/getLoginUserError';
import { getLoginUserLoading } from '../../model/selectors/getLoginUserLoading';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginUserPassword } from '../../model/selectors/getLoginUserPassword';
import { asyncLoginUser } from '../../model/services/asyncLoginUser';
import { loginUserActions, loginUserReducer } from '../../model/slice/loginUserSlice';

import style from './LoginForm.module.scss';

const listState: ReducerList = { loginUser: loginUserReducer };

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginUserPassword);
  const error = useSelector(getLoginUserError);
  const isLoading = useSelector(getLoginUserLoading);

  const onChangeLogin = useCallback(
    (value: string) => {
      dispatch(loginUserActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginUserActions.setPassword(value));
    },
    [dispatch],
  );

  const onClickLogin = useCallback(async () => {
    await dispatch(asyncLoginUser({ username, password }));
  }, [dispatch, password, username]);

  useAsyncWrapperReducer(listState);

  return (
    <div className={style.LoginForm}>
      <h3 className={style.title}>{t('Sing in with')}</h3>
      <form className={classNames(style.form, {}, [className])}>
        <div className={style.wrapperInput}>
          <label className={style.label} htmlFor='login'>
            {t('Login')}
          </label>
          <Input
            onChange={onChangeLogin}
            value={username}
            autofocus
            theme='clear'
            className={style.input}
          />
        </div>
        <div className={style.wrapperInput}>
          <label className={style.label} htmlFor='password'>
            {t('Password')}
          </label>
          <Input
            onChange={onChangePassword}
            value={password}
            theme='clear'
            className={style.input}
            type='password'
          />
        </div>
        {error && (
          <Text
            size='m'
            className={style.errorText}
            theme='red'
            text={t('Wrong login or password, try again!')}
          />
        )}
        <Button onClick={onClickLogin} disabled={isLoading} className={style.loginBtn}>
          {t('Sign in')}
        </Button>
      </form>
    </div>
  );
});

export default LoginForm;
