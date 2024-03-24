import { Meta, StoryFn } from '@storybook/react';
import { CountryList } from '../../Country';
import { ProfileList } from '../ui/ProfileList';
import { CurrencyList } from '../../Currency';

export default {
  title: 'entity/ProfileList',
  component: ProfileList,
  args: {
    form: {
      username: 'admin',
      age: 22,
      country: CountryList.CZECH,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: CurrencyList.USD,
      avatar: undefined,
    },
  },
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ProfileList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof ProfileList> = args => <ProfileList {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Error while creating Profile',
};
