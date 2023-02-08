import { FolderIcon } from '@heroicons/react/24/solid'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Card } from './card.component'

type Meta = ComponentMeta<typeof Card>
type Story = ComponentStoryObj<typeof Card>

export default {
  component: Card,
  title: 'Molecules/Card',
  decorators: [
    (Story) => {
      return (
        <div style={{ width: 256 }}>
          <Story />
        </div>
      )
    }
  ]
} as Meta

export const Default: Story = {
  args: {
    title: 'タイトル',
    children: 'コンテンツ'
  }
}

export const WithHeaderIcon: Story = {
  args: {
    title: 'タイトル',
    icon: <FolderIcon />,
    children: 'コンテンツ'
  }
}

export const WithFooter: Story = {
  args: {
    title: 'タイトル',
    icon: <FolderIcon />,
    children: 'コンテンツ',
    footerPane: <div>フッターアイテム</div>
  }
}
