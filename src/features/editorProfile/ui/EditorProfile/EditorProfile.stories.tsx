import { Meta, StoryFn } from '@storybook/react';
import { Profile } from '@/entity/Profile';
import { EditorProfile } from './EditorProfile';
import { CurrencyList } from '@/entity/Currency';
import { CountryList } from '@/entity/Country';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';

export default {
  title: 'features/EditorProfile',
  component: EditorProfile,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof EditorProfile>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof EditorProfile> = args => <EditorProfile {...args} />;

const profileForm: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 22,
  currency: CurrencyList.RUB,
  country: CountryList.UKRAINE,
  city: 'Moscow',
  username: 'Admin',
  avatar: '',
};
export const Normal = Template.bind({});
Normal.decorators = [
  StoreDecorator({
    profile: {
      data: profileForm,
      form: profileForm,
      readonly: false,
      isLoading: false,
    },
  }),
];
