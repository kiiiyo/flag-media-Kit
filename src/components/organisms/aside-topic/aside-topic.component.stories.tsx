import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { AsideTopic } from './aside-topic.component'

type Meta = ComponentMeta<typeof AsideTopic>
type Story = ComponentStoryObj<typeof AsideTopic>

export default {
  component: AsideTopic,
  title: 'Organisms/AsideTopic',
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
