import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Loader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Dark = Template.bind({});

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
