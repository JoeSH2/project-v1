import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

export default {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof LangSwitcher>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof LangSwitcher> = args => <LangSwitcher {...args} />;

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };

export const Default = Template.bind({});
Default.args = { theme: Theme.DEFAULT };
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
