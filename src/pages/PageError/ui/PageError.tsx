import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Block } from '@/shared/ui/Block';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface PageErrorProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <PageWrapper data-testid='PageError'>
      <Block>
        <div>{t('There was an error, return to the home page?')}</div>
        <Button onClick={reloadPage} theme={ButtonTheme.CLEAR}>
          {t('Reload page')}
        </Button>
      </Block>
    </PageWrapper>
  );
};
