import { Profile } from 'entity/Profile';
import { getUserAuth } from 'entity/User';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { ReducerList, useAsyncWrapperReducer } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { editorProfileActions, editorProfileReducer } from '../../model/slice/editorProfileSlice';
import style from './EditorProfileHeader.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditorProfileHeaderProps {
  className?: string;
}

const reducerList: ReducerList = {
  profile: editorProfileReducer,
};

export const EditorProfileHeader: FC<EditorProfileHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const userData = useSelector(getUserAuth);
  const profileData = useSelector(getProfileData);

  const onEdit = () => {
    dispatch(editorProfileActions.setReadonly(false));
  };
  const cancelEdit = () => {
    dispatch(editorProfileActions.setCancelEdit());
  };
  const onSaveForm = () => {
    dispatch(updateProfileData());
  };

  useAsyncWrapperReducer(reducerList);

  return (
    <HStack htmlStyle='section' className={classNames(style.EditorProfileHeader, {}, [className])}>
      <div className={style.titleWrapper}>
        <Text align='left' className={style.title} theme='theme' title={t('Profile')} />
        <Avatar size={65} src={profileData?.avatar} alt='avatar' />
      </div>
      {userData?.id === profileData?.id &&
        (readonly ? (
          <HStack justify='end' className={style.wrapperBtn}>
            <Button data-testid='EditorProfileHeader.EditBtn' onClick={onEdit} className={style.editBtn}>
              {t('Edit')}
            </Button>
          </HStack>
        ) : (
          <HStack justify='end' className={style.wrapperBtn}>
            <Button
              data-testid='EditorProfileHeader.CancelBtn'
              onClick={cancelEdit}
              theme={ButtonTheme.RED}
              className={style.editBtn}
            >
              {t('Cancel')}
            </Button>
            <Button data-testid='EditorProfileHeader.SaveBtn' onClick={onSaveForm} className={style.editBtn}>
              {t('Save')}
            </Button>
          </HStack>
        ))}
    </HStack>
  );
};
