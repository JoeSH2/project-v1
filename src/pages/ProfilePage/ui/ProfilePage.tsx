import { CountryList } from 'entity/Country';
import { CurrencyList } from 'entity/Currency';
import {
  fetchProfileData, getProfileErrorForm, getProfileForm, profileActions, ProfileList,
} from 'entity/Profile';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { Block } from 'shared/ui/Block';
import { Text } from 'shared/ui/Text';
import { PageWrapper } from 'widgets/PageWrapper';

import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import style from './ProfilePage.module.scss';

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const validateFormError = useSelector(getProfileErrorForm);
  const { id } = useParams();

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.setDataForm({ first: value || '' }));
  }, [dispatch]);
  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.setDataForm({ lastname: value || '' }));
  }, [dispatch]);
  const onChangeAge = useCallback((value?: number) => {
    dispatch(profileActions.setDataForm({ age: Number(value || '') }));
  }, [dispatch]);
  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.setDataForm({ city: value }));
  }, [dispatch]);
  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.setDataForm({ username: value }));
  }, [dispatch]);
  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.setDataForm({ avatar: value }));
  }, [dispatch]);
  const onChangeCurrency = useCallback((currency?: CurrencyList) => {
    dispatch(profileActions.setDataForm({ currency }));
  }, [dispatch]);
  const onChangeCountry = useCallback((country?: CountryList) => {
    dispatch(profileActions.setDataForm({ country }));
  }, [dispatch]);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <PageWrapper className={style.page}>
      <Block className={style.ProfilePage}>
        <ProfileHeader data={formData} />
        {validateFormError?.length && validateFormError.map((err) => (
          <Text key={err} theme="red" text={err} />
        ))}
        <ProfileList
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          data={formData}
        />
      </Block>
    </PageWrapper>
  );
};

export default ProfilePage;
