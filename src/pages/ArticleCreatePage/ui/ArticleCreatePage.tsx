import { useTranslation } from 'react-i18next'
import { Block } from 'shared/ui/Block'
import { PageWrapper } from 'widgets/PageWrapper'

const ArticleCreatePage = () => {
  const { t } = useTranslation('main')
  return (
    <PageWrapper>
      <Block>{t('Create article')}</Block>
    </PageWrapper>
  )
}

export default ArticleCreatePage
