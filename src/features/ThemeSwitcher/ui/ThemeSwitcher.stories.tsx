import { Meta, StoryFn } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ThemeSwitcher>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof ThemeSwitcher> = args => <ThemeSwitcher {...args} />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
