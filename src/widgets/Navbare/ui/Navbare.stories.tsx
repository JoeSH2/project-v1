import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemesProvider';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Navbare } from './Navbare';

export default {
  title: 'widgets/Navbare',
  component: Navbare,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof Navbare>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Navbare> = args => <Navbare {...args} />;

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({})];

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
