import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ArticleCollection } from './article-collection.component'
import { mockArticleCollection } from './testing/mock-article-collection'

type Meta = ComponentMeta<typeof ArticleCollection>
type Story = ComponentStoryObj<typeof ArticleCollection>

export default {
  component: ArticleCollection,
  title: 'Organisms/ArticleCollection',
  args: {
    articles: mockArticleCollection
  }
} as Meta

export const Default: Story = {}
