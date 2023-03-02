import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({
  loginUser: { username: 'admin', password: 'admin', isLoading: false },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  loginUser: { username: 'admin', password: 'admin', isLoading: false },
})];

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  theme: 'red',
};
ErrorDefault.decorators = [StoreDecorator({
  loginUser: {
    username: 'admin', password: 'admin', isLoading: false, error: 'Error',
  },
})];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  theme: 'red',
};
ErrorDark.decorators = [StoreDecorator({
  loginUser: {
    username: 'admin', password: 'admin', isLoading: false, error: 'Error',
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  loginUser: { username: 'admin', password: 'admin', isLoading: true },
})];
