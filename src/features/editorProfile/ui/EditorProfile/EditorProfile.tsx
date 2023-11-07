import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import style from './EditorProfile.module.scss';
import { getProfileForm } from '@/features/editorProfile/model/selectors/getProfileForm';
import { ReducerList, useAsyncWrapperReducer } from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { editorProfileActions, editorProfileReducer } from '@/features/editorProfile/model/slice/editorProfileSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getProfileReadonly } from '@/features/editorProfile/model/selectors/getProfileReadonly';
import { getProfileLoading } from '@/features/editorProfile/model/selectors/getProfileLoading';
import { getProfileError } from '@/features/editorProfile/model/selectors/getProfileError';
import { getProfileErrorForm } from '@/features/editorProfile/model/selectors/getProfileErrorForm';
import { CurrencyList } from '@/entity/Currency';
import { CountryList } from '@/entity/Country';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { fetchProfileData } from '@/features/editorProfile/model/services/fetchProfileData/fetchProfileData';
import { Block } from '@/shared/ui/Block';
import { EditorProfileHeader } from '../EditorProfileHeader/EditorProfileHeader';
import { ProfileList } from '@/entity/Profile';

interface EditorProfileProps {
  className?: string;
  id: string | undefined;
}

const reducerList: ReducerList = {
  profile: editorProfileReducer,
};

export const EditorProfile: FC<EditorProfileProps> = memo((props: EditorProfileProps) => {
  const { className, id } = props;
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

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  useAsyncWrapperReducer(reducerList);
  return (
    <Block className={className}>
      <EditorProfileHeader />
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
    </Block>
  );
});
