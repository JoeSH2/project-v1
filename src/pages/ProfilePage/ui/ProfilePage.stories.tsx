import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { ProfilePage } from '@/pages/ProfilePage';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';
import { CountryList } from '@/entity/Country';
import { CurrencyList } from '@/entity/Currency';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ProfilePage>;

const Template: StoryFn<typeof ProfilePage> = () => <ProfilePage />;

export const Dark = Template.bind({});
Dark.decorators = [
  StoreDecorator({
    profile: {
      data: {
        age: 22,
        city: 'Moscow',
        country: CountryList.RUSSIA,
        currency: CurrencyList.RUB,
        first: 'Danila',
        username: 'admin',
        lastname: 'Kuzin',
      },
    },
  }),
];

export const Default = Template.bind({});
Default.decorators = [
  ThemeDecorator(Theme.DEFAULT),
  StoreDecorator({
    profile: {
      data: {
        age: 22,
        city: 'Moscow',
        country: CountryList.RUSSIA,
        currency: CurrencyList.RUB,
        first: 'Danila',
        username: 'admin',
        lastname: 'Kuzin',
      },
    },
  }),
];
