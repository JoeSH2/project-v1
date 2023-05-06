import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleCreateButton } from './ArticleCreateButton'

export default {
  title: 'shared/ArticleCreate',
  component: ArticleCreateButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCreateButton>

const Template: ComponentStory<typeof ArticleCreateButton> = (args) => <ArticleCreateButton {...args} />

export const Normal = Template.bind({})
Normal.args = {}
