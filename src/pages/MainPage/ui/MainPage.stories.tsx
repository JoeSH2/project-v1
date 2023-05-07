import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemesProvider'
import React from 'react'
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator'

import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore'
import { MainPage } from '../index'

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Dark = Template.bind({})
Dark.args = { theme: Theme.DARK }
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Default = Template.bind({})
Default.args = { theme: Theme.DEFAULT }
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})]
