import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemesProvider'
import React from 'react'
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator'

import ArtIcon from './art.jpg'
import { Avatar } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Avatar>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Dark = Template.bind({})
Dark.args = {
  src: ArtIcon,
  alt: 'art',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Default = Template.bind({})
Default.args = {
  src: ArtIcon,
  alt: 'art',
}
Default.decorators = [ThemeDecorator(Theme.DEFAULT)]
