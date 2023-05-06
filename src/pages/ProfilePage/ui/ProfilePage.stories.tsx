import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import { CountryList } from 'entity/Country';
import { CurrencyList } from 'entity/Currency';
import React from 'react';
import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({
  profile: {
    form: {
      age: 22,
      city: 'Moscow',
      country: CountryList.RUSSIA,
      currency: CurrencyList.RUB,
      first: 'Danila',
      username: 'admin',
      lastname: 'Kuzin',
    },
  },
})];

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({
  profile: {
    form: {
      age: 22,
      city: 'Moscow',
      country: CountryList.RUSSIA,
      currency: CurrencyList.RUB,
      first: 'Danila',
      username: 'admin',
      lastname: 'Kuzin',
    },
  },
})];
