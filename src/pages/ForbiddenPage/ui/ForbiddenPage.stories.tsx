import { Meta, StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { Theme } from '@/app/providers/ThemesProvider';
import { ForbiddenPageAsync } from './ForbiddenPage.async';
import { ThemeDecorator } from '@/shared/config/decorators/themeDecorator';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecoratore';

export default {
  title: 'pages/ForbiddenPageAsync',
  component: ForbiddenPageAsync,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof ForbiddenPageAsync>;

const Template: StoryFn<typeof ForbiddenPageAsync> = () => (
  <Suspense fallback={<div />}>
    <ForbiddenPageAsync />
  </Suspense>
);

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})];
