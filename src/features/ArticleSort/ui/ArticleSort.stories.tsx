import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/decorators/StoreDecoratore'
import { ArticleType } from 'entity/Article'
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator'
import { Theme } from 'app/providers/ThemesProvider'
import { ArticleSort } from './ArticleSort'
import { ArticleSortField } from '../model/types/ArticleSortSchema'

export default {
  title: 'features/article/ArticleSort',
  component: ArticleSort,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof ArticleSort>

const Template: ComponentStory<typeof ArticleSort> = (args) => <ArticleSort {...args} />

export const Dark = Template.bind({})
Dark.decorators = [
  StoreDecorator({
    articleSort: {
      order: 'asc',
      search: 'react',
      sort: ArticleSortField.VIEWS,
      type: ArticleType.CRYPTO,
    },
  }),
]

export const Brown = Template.bind({})
Brown.decorators = [
  ThemeDecorator(Theme.BROWN),
  StoreDecorator({
    articleSort: {
      order: 'asc',
      search: 'react',
      sort: ArticleSortField.VIEWS,
      type: ArticleType.CRYPTO,
    },
  }),
]

export const Normal = Template.bind({})
Normal.decorators = [
  ThemeDecorator(Theme.DEFAULT),
  StoreDecorator({
    articleSort: {
      order: 'asc',
      search: 'react',
      sort: ArticleSortField.VIEWS,
      type: ArticleType.CRYPTO,
    },
  }),
]
