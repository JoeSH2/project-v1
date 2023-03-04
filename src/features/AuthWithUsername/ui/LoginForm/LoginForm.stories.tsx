import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  loginUser: { username: 'admin', password: 'admin', isLoading: false },
})];

export const Error = Template.bind({});
Error.args = {
  theme: 'red',
};
Error.decorators = [StoreDecorator({
  loginUser: {
    username: 'admin', password: 'admin', isLoading: false, error: 'Error',
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  loginUser: { username: 'admin', password: 'admin', isLoading: true },
})];
