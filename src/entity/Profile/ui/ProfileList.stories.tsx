import { Meta, StoryFn } from '@storybook/react';
import { CountryList } from '@/entity/Country';
import { ProfileList } from '@/entity/Profile';
import { CurrencyList } from '@/entity/Currency';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';

export default {
  title: 'entity/ProfileList',
  component: ProfileList,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ProfileList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof ProfileList> = args => <ProfileList {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  form: {
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
Dark.decorators = [
  StoreDecorator({
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
  }),
];

export const Error = Template.bind({});
Error.decorators = [StoreDecorator({ profile: { error: 'asdasd' } })];
