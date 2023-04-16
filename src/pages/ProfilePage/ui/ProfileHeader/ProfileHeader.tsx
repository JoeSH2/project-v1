import { getProfileData, Profile, profileActions } from 'entity/Profile';
import { getProfileReadonly } from 'entity/Profile/model/selectors/getProfileReadonly';
import { updateProfileData } from 'entity/Profile/model/services/updateProfileData/updateProfileData';
import { getUserAuth } from 'entity/User';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';

import style from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
  className?: string;
  data?: Profile;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className, data }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const userData = useSelector(getUserAuth);
  const profileData = useSelector(getProfileData);

  const onEdit = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const cancelEdit = () => {
    dispatch(profileActions.setCancelEdit());
  };

  const onSaveForm = () => {
    dispatch(updateProfileData());
  };

  return (
    <div className={classNames(style.ProfileHeader, {}, [className])}>
      <div className={style.titleWrapper}>
        <Text align="left" className={style.title} theme="theme" title={t('Profile')} />
        <Avatar size={65} src={data?.avatar} alt="avatar" />
      </div>
      {
        userData?.id === profileData?.id && (
          readonly ? (
            <div className={style.wrapperBtn}>
              <Button
                onClick={onEdit}
                className={style.editBtn}
              >
                {t('Edit')}

              </Button>
            </div>
          ) : (
            <div className={style.wrapperBtn}>
              <Button
                onClick={cancelEdit}
                theme={ButtonTheme.RED}
                className={style.editBtn}
              >
                {t('Cancel')}
              </Button>
              <Button
                onClick={onSaveForm}
                className={style.editBtn}
              >
                {t('Save')}

              </Button>
            </div>
          )
        )
      }
    </div>
  );
};
