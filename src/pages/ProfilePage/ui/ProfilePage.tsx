import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { fetchJsonSettings, useGetJsonSettings } from '@/entity/User';
import { EditorProfile } from '@/features/editorProfile';
import { ProfileRating } from '@/features/ProfileRating';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Block } from '@/shared/ui/Block';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { PageWrapper } from '@/widgets/PageWrapper';

import style from './ProfilePage.module.scss';

const ProfilePage: FC = () => {
  const { id } = useParams();
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const jsonSettings = useGetJsonSettings();

  const onCloseFirstVisitModal = () => {
    setIsOpen(false);
    dispatch(fetchJsonSettings({ firstVisit: true }));
  };

  useEffect(() => {
    if (jsonSettings !== undefined && !jsonSettings.firstVisit) {
      setIsOpen(true);
    }
  }, [jsonSettings]);

  if (!id) {
    return <Text title={t('No profile found =(')} />;
  }
  return (
    <PageWrapper data-testid='ProfilePage' className={style.page}>
      <Block>
        <EditorProfile className={style.ProfilePage} id={id} />
        <ProfileRating profileId={id} />
      </Block>
      {!jsonSettings?.firstVisit && (
        <Modal isOpen={isOpen} onClose={onCloseFirstVisitModal}>
          <Text
            className={style.modalText}
            theme='inverted'
            size='l'
            title={t(
              'This is the first time you have visited the profile page. If this is your profile, you will be able to edit it',
            )}
            text={t('This window is shown only once')}
          />
        </Modal>
      )}
    </PageWrapper>
  );
};

export default ProfilePage;
