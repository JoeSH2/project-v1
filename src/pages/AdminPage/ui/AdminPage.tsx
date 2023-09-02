import { useTranslation } from 'react-i18next';
import { Block } from 'shared/ui/Block';
import { PageWrapper } from 'widgets/PageWrapper';

const AdminPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Block>
        <p>{t('Admin page')}</p>
      </Block>
    </PageWrapper>
  );
};

export default AdminPage;
