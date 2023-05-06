import { CountryList, CountrySelect } from 'entity/Country';
import { CurrencySelect } from 'entity/Currency';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducerList, useAsyncWrapperReducer } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Select } from 'shared/ui/Select';
import { Text } from 'shared/ui/Text';

import { getProfileError } from '../model/selectors/getProfileError';
import { getProfileLoading } from '../model/selectors/getProfileLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly';
import { profileReducer } from '../model/slice/ProfileSlice';
import { Profile } from '../model/types/ProfileSchema';
import style from './ProfileList.module.scss';

interface ProfileListProps {
  className?: string;
  theme?: string;
  children?: React.ReactNode;
  data?: Profile;
  onChangeFirstname: () => void;
  onChangeLastname: () => void;
  onChangeAge: () => void;
  onChangeCountry: () => void;
  onChangeCity: () => void;
  onChangeUsername: () => void;
  onChangeAvatar: () => void;
  onChangeCurrency: () => void;
}

const listState: ReducerList = { profile: profileReducer, };

export const ProfileList: FC<ProfileListProps> = ({
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCountry,
  data,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
}) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  useAsyncWrapperReducer(listState);

  if (isLoading) {
    return (
      <form className={classNames(style.ProfileList, {}, [style.load])} action="">
        <Loader theme="large" />
      </form>
    );
  }

  if (error) {
    return (
      <form className={classNames(style.ProfileList, { [style.error]: error }, [])} action="">
        <Text 
          theme="red" 
          title={t('Data retrieval error')} 
          text={t('Profile data was not received, try reloading the page')} />
      </form>
    );
  }

  return (
    <form className={classNames(style.ProfileList, {}, [])} action="">
      <div className={style.wrapper}>
        <label className={style.label} htmlFor="firstname">{t('Username')}</label>
        <Input
          value={data?.username}
          onChange={onChangeUsername}
          theme="default"
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor="firstname">{t('Firstname')}</label>
        <Input
          value={data?.first}
          onChange={onChangeFirstname}
          theme="default"
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor="firstname">{t('Lastname')}</label>
        <Input
          value={data?.lastname}
          onChange={onChangeLastname}
          theme="default"
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor="firstname">{t('Age')}</label>
        <Input
          type="number"
          value={data?.age}
          onChange={onChangeAge}
          theme="default"
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor="firstname">{t('Avatar')}</label>
        <Input
          value={data?.avatar}
          onChange={onChangeAvatar}
          theme="default"
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor="firstname">{t('City')}</label>
        <Input
          value={data?.city}
          onChange={onChangeCity}
          theme="default"
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor="firstname">{t('Country')}</label>
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor="firstname">{t('Currency')}</label>
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          className={style.input}
          readonly={readonly}
        />
      </div>
    </form>
  );
};
