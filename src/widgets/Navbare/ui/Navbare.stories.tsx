import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { Navbare } from './Navbare';

export default {
  title: 'widgets/Navbare',
  component: Navbare,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbare>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Navbare> = (args) => <Navbare {...args} />;

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({})];

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
