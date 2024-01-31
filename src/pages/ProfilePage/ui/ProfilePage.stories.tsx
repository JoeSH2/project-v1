import { Meta, StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { Theme } from '@/app/providers/ThemesProvider';
import { ProfilePageAsync } from './ProfilePage.async';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';
import { CountryList } from '@/entity/Country';
import { CurrencyList } from '@/entity/Currency';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePageAsync,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ProfilePageAsync>;

const Template: StoryFn<typeof ProfilePageAsync> = () => (
  <Suspense fallback={<div />}>
    <ProfilePageAsync />
  </Suspense>
);

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
