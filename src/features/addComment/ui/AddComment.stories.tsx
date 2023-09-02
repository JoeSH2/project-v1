import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import AddComment from './AddComment';

export default {
  title: 'shared/AddComment',
  component: AddComment,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof AddComment>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof AddComment> = args => <AddComment {...args} />;

export const Clear = Template.bind({});
Clear.args = {};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
