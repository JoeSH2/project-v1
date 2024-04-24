import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';

import style from './EditorProfileHeader.module.scss';
import { editorProfileActions, editorProfileReducer } from '../../model/slice/editorProfileSlice';
import {
  ReducerList,
  useAsyncWrapperReducer,
} from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { getUserAuth } from '@/entity/User';
import { getProfileData } from '../../model/selectors/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Avatar } from '@/shared/ui/Avatar';

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
  const canEdit = userData?.id === profileData?.id;

  const onEdit = () => {
    dispatch(editorProfileActions.setReadonly(false));
  };
  const cancelEdit = () => {
    dispatch(editorProfileActions.setCancelEdit());
  };
  const onSaveForm = () => {
    dispatch(updateProfileData());
  };

  const editBlock = () => {
    if (readonly) {
      return (
        <HStack justify='justifyEnd' className={style.wrapperBtn}>
          <Button
            data-testid='EditorProfileHeader.EditBtn'
            onClick={onEdit}
            className={style.editBtn}
          >
            {t('Edit')}
          </Button>
        </HStack>
      );
    }

    return (
      <HStack justify='justifyEnd' className={style.wrapperBtn}>
        <Button
          data-testid='EditorProfileHeader.CancelBtn'
          onClick={cancelEdit}
          theme={ButtonTheme.RED}
          className={style.editBtn}
        >
          {t('Cancel')}
        </Button>
        <Button
          data-testid='EditorProfileHeader.SaveBtn'
          onClick={onSaveForm}
          className={style.editBtn}
        >
          {t('Save')}
        </Button>
      </HStack>
    );
  };

  useAsyncWrapperReducer(reducerList);

  return (
    <HStack htmlStyle='section' className={classNames(style.EditorProfileHeader, {}, [className])}>
      <div className={style.titleWrapper}>
        <Text align='left' className={style.title} theme='theme' title={t('Profile')} />
        <Avatar size={65} src={profileData?.avatar} alt='avatar' />
      </div>
      {canEdit && editBlock()}
    </HStack>
  );
};
