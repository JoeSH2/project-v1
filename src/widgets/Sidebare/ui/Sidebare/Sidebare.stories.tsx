import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Sidebare } from './Sidebare';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/Sidebare',
  component: Sidebare,
} as Meta<typeof Sidebare>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Sidebare> = args => <Sidebare {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  }),
];

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  ThemeDecorator(Theme.DEFAULT),
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  }),
];
