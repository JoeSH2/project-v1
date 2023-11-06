import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Block } from '@/shared/ui/Block';
import { PageWrapper } from '@/widgets/PageWrapper';

const ArticleCreatePage = () => {
  const { t } = useTranslation('main');
  const { id } = useParams();
  const canEdit = Boolean(id);

  return (
    <PageWrapper>
      <Block>{canEdit ? t('Edit article id=') + id : t('Create article')}</Block>
    </PageWrapper>
  );
};

export default ArticleCreatePage;
