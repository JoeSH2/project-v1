import { Meta, StoryFn } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/ThemesProvider';

export default {
  title: 'entity/NotificationItem',
  component: NotificationItem,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof NotificationItem>;

const Template: StoryFn<typeof NotificationItem> = args => <NotificationItem {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  className: '',
  href: '',
  title: 'Title',
  userId: '1',
  id: '1',
  description: 'Description',
};

export const Default = Template.bind({});
Default.args = {
  className: '',
  href: '',
  title: 'Title',
  userId: '1',
  id: '1',
  description: 'Description',
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
