import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountryList } from 'entity/Country';
import { CurrencyList } from 'entity/Currency';
import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';

import { ProfileList } from './ProfileList';

export default {
  title: 'entity/ProfileList',
  component: ProfileList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ProfileList> = (args) => <ProfileList {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  data: {
    username: 'admin',
    age: 22,
    country: CountryList.CZECH,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: CurrencyList.USD,
    avatar: 'dasdasd',
  },
};
Dark.decorators = [StoreDecorator({
  profile: {
    data: {
      username: 'admin',
      age: 22,
      country: CountryList.CZECH,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: CurrencyList.USD,
      avatar: 'dasdasd',
    },
  },
})];

export const Error = Template.bind({});
Error.decorators = [StoreDecorator({
  profile: {
    error: 'asdasd',
  },
})];
