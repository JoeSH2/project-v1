import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { Modal } from '../ui/Modal';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Modal> = args => <Modal {...args} />;

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
