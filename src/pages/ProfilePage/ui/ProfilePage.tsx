import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';
import style from './ProfilePage.module.scss';
import { EditorProfile } from '@/features/editorProfile';
import { ProfileRating } from '@/features/ProfileRating';
import { Text } from '@/shared/ui/Text';
import { Block } from '@/shared/ui/Block';

const ProfilePage: FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  if (!id) {
    return <Text title={t('No profile found =(')} />;
  }

  return (
    <PageWrapper data-testid='ProfilePage' className={style.page}>
      <Block>
        <EditorProfile className={style.ProfilePage} id={id} />
        <ProfileRating profileId={id} />
      </Block>
    </PageWrapper>
  );
};

export default ProfilePage;
