import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '@/widgets/PageWrapper';
import style from './ProfilePage.module.scss';
import { EditorProfile } from '@/features/editorProfile';

const ProfilePage: FC = () => {
  const { id } = useParams();

  return (
    <PageWrapper className={style.page}>
      <EditorProfile className={style.ProfilePage} id={id} />
    </PageWrapper>
  );
};

export default ProfilePage;
