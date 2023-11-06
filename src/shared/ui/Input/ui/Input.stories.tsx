import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { Input } from '@/shared/ui/Input';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Input>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'default',
  value: 'Login',
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  value: 'Login',
};
