import { Meta, StoryFn } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entity/NotificationItem',
  args: {
    className: '',
    href: '',
    title: 'Title',
    userId: '1',
    id: '1',
    description: 'Description',
  },
  component: NotificationItem,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof NotificationItem>;

const Template: StoryFn<typeof NotificationItem> = args => <NotificationItem {...args} />;

export const Default = Template.bind({});
