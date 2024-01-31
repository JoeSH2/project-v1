import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';
import LoginForm from '../LoginForm/LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof LoginForm>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof LoginForm> = args => <LoginForm {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({ loginUser: { username: 'admin', password: 'admin', isLoading: false } })];

export const Error = Template.bind({});
Error.decorators = [
  StoreDecorator({
    loginUser: {
      username: 'admin',
      password: 'admin',
      isLoading: false,
      error: 'Error',
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ loginUser: { username: 'admin', password: 'admin', isLoading: true } })];
