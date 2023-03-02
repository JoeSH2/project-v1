import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbare } from './Navbare';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';

export default {
  title: 'widgets/Navbare',
  component: Navbare,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbare>;

const Template: ComponentStory<typeof Navbare> = (args) => <Navbare {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.DARK,
};
Dark.decorators = [StoreDecorator({})];

export const Default = Template.bind({});
Default.args = {
  theme: Theme.DEFAULT,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
