import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { AsideCategory } from './aside-category.component'

type Meta = ComponentMeta<typeof AsideCategory>
type Story = ComponentStoryObj<typeof AsideCategory>

export default {
  component: AsideCategory,
  title: 'Organisms/AsideCategory',
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

export const Default: Story = {}
