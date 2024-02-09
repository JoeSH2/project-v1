import { Meta, StoryFn } from '@storybook/react';
import { AppLink, AppLinkTheme } from '../ui/AppLink';
import { ThemeDecorator } from '../../../config/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: { backgroundColor: { control: 'color' } },
  args: {
    to: '/',
    children: 'click me',
  },
} as Meta<typeof AppLink>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof AppLink> = args => <AppLink {...args} />;

export const Dark = Template.bind({});
Dark.args = { theme: AppLinkTheme.DARK };

export const Default = Template.bind({});
Default.args = { theme: AppLinkTheme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
