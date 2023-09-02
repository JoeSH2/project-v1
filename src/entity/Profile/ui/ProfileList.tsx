import { CountrySelect } from 'entity/Country';
import { CurrencySelect } from 'entity/Currency';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Text } from 'shared/ui/Text';
import { Profile } from '../model/types/Profile';
import style from './ProfileList.module.scss';

interface ProfileListProps {
  className?: string;
  form?: Profile;
  readonly?: boolean;
  isLoading?: boolean;
  error?: string;
  onChangeFirstname: () => void;
  onChangeLastname: () => void;
  onChangeAge: () => void;
  onChangeCountry: () => void;
  onChangeCity: () => void;
  onChangeUsername: () => void;
  onChangeAvatar: () => void;
  onChangeCurrency: () => void;
}

export const ProfileList: FC<ProfileListProps> = ({
  isLoading,
  error,
  readonly,
  form,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCountry,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <form className={classNames(style.ProfileList, {}, [style.load])} action=''>
        <Loader theme='large' />
      </form>
    );
  }

  if (error) {
    return (
      <form className={classNames(style.ProfileList, { [style.error]: error }, [])} action=''>
        <Text
          theme='red'
          title={t('Data retrieval error')}
          text={t('Profile data was not received, try reloading the page')}
        />
      </form>
    );
  }

  return (
    <form className={classNames(style.ProfileList, {}, [])} action=''>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor='firstname'>
          {t('Username')}
        </label>
        <Input
          data-testid='ProfileList.username'
          value={form?.username}
          onChange={onChangeUsername}
          theme='default'
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor='firstname'>
          {t('Firstname')}
        </label>
        <Input
          data-testid='ProfileList.firstname'
          value={form?.first}
          onChange={onChangeFirstname}
          theme='default'
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor='firstname'>
          {t('Lastname')}
        </label>
        <Input
          value={form?.lastname}
          onChange={onChangeLastname}
          theme='default'
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor='firstname'>
          {t('Age')}
        </label>
        <Input
          type='number'
          value={form?.age}
          onChange={onChangeAge}
          theme='default'
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor='firstname'>
          {t('Avatar')}
        </label>
        <Input
          value={form?.avatar}
          onChange={onChangeAvatar}
          theme='default'
          className={style.input}
          readonly={readonly}
        />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor='firstname'>
          {t('City')}
        </label>
        <Input value={form?.city} onChange={onChangeCity} theme='default' className={style.input} readonly={readonly} />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor='firstname'>
          {t('Country')}
        </label>
        <CountrySelect value={form?.country} onChange={onChangeCountry} className={style.select} readonly={readonly} />
      </div>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor='firstname'>
          {t('Currency')}
        </label>
        <CurrencySelect
          value={form?.currency}
          onChange={onChangeCurrency}
          className={style.select}
          readonly={readonly}
        />
      </div>
    </form>
  );
};
