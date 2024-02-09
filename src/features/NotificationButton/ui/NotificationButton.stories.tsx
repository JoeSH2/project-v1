import { Meta, StoryFn } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

import { Theme } from '@/shared/const/theme';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof NotificationButton>;

const Template: StoryFn<typeof NotificationButton> = args => <NotificationButton {...args} />;

export const Dark = Template.bind({});
Dark.args = {};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
