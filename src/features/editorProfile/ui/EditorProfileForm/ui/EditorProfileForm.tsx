import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { CountryList } from '@/entity/Country';
import { CurrencyList } from '@/entity/Currency';
import { ProfileList } from '@/entity/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import { getProfileError } from '../../../model/selectors/getProfileError';
import { getProfileErrorForm } from '../../../model/selectors/getProfileErrorForm';
import { getProfileForm } from '../../../model/selectors/getProfileForm';
import { getProfileLoading } from '../../../model/selectors/getProfileLoading';
import { getProfileReadonly } from '../../../model/selectors/getProfileReadonly';
import { editorProfileActions } from '../../../model/slice/editorProfileSlice';

import style from './EditorProfileForm.module.scss';

interface EditorProfileFormProps {
  className?: string;
}

export const EditorProfileForm: FC<EditorProfileFormProps> = props => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const readonly = useSelector(getProfileReadonly);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const validateFormError = useSelector(getProfileErrorForm);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(editorProfileActions.setDataForm({ first: value || '' }));
    },
    [dispatch],
  );
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(editorProfileActions.setDataForm({ lastname: value || '' }));
    },
    [dispatch],
  );
  const onChangeAge = useCallback(
    (value?: number) => {
      dispatch(editorProfileActions.setDataForm({ age: Number(value || '') }));
    },
    [dispatch],
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(editorProfileActions.setDataForm({ city: value }));
    },
    [dispatch],
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(editorProfileActions.setDataForm({ username: value }));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(editorProfileActions.setDataForm({ avatar: value }));
    },
    [dispatch],
  );
  const onChangeCurrency = useCallback(
    (currency?: CurrencyList) => {
      dispatch(editorProfileActions.setDataForm({ currency }));
    },
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (country?: CountryList) => {
      dispatch(editorProfileActions.setDataForm({ country }));
    },
    [dispatch],
  );

  return (
    <div className={classNames(style.block, {}, [])}>
      {validateFormError?.length &&
        validateFormError.map(err => <Text data-testid='EditorProfile.Error' key={err} theme='red' text={err} />)}
      <ProfileList
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
        form={formData}
        readonly={readonly}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};
