import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ArticleCollection } from './article-collection.component'

type Meta = ComponentMeta<typeof ArticleCollection>
type Story = ComponentStoryObj<typeof ArticleCollection>

export default {
  component: ArticleCollection,
  title: 'Organisms/ArticleCollection'
} as Meta

export const Default: Story = {}
