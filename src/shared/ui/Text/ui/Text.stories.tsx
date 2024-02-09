import { Meta, StoryFn } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Text>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Text> = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'theme',
  text: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem, ipsum.',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'theme',
  text: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem, ipsum.',
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];

export const Red = Template.bind({});
Red.args = {
  theme: 'red',
  text: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem, ipsum.',
};

export const RedDark = Template.bind({});
RedDark.args = {
  theme: 'red',
  text: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem, ipsum.',
};
RedDark.decorators = [ThemeDecorator(Theme.DEFAULT)];
