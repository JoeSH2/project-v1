import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemesProvider'
import React from 'react'
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator'

import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore'
import { ArticleCreatePage } from '../index'

export default {
  title: 'pages/ArticleCreatePage',
  component: ArticleCreatePage,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof ArticleCreatePage>

const Template: ComponentStory<typeof ArticleCreatePage> = () => <ArticleCreatePage />

export const Dark = Template.bind({})
Dark.args = { theme: Theme.DARK }
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Default = Template.bind({})
Default.args = { theme: Theme.DEFAULT }
Default.decorators = [ThemeDecorator(Theme.DEFAULT), StoreDecorator({})]
