import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isOpen: true,
};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  isOpen: true,
};
