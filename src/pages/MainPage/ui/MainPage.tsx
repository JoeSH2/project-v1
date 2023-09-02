import { useTranslation } from 'react-i18next';
import { Block } from 'shared/ui/Block';
import { PageWrapper } from 'widgets/PageWrapper';

const MainPage = () => {
	const { t } = useTranslation('main');
	const items = [{ value: 'Account settings' }, { value: 'Support' }, { value: 'License' }, { value: 'Sign out' }];

	return (
		<PageWrapper>
			<Block>
				<p>{t('Main page')}</p>
			</Block>
		</PageWrapper>
	);
};

export default MainPage;
