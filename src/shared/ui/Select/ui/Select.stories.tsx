import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  value: 'Vot',
  options: [
    { value: 'a', content: 'a' },
    { value: 'n', content: 'n' },
    { value: 'd', content: 'd' },
    { value: 'w', content: 'w' },
  ],
};

export const Default = Template.bind({});
Default.args = {
  value: 'Vot',
  options: [
    { value: 'a', content: 'a' },
    { value: 'n', content: 'n' },
    { value: 'd', content: 'd' },
    { value: 'w', content: 'w' },
  ],
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
