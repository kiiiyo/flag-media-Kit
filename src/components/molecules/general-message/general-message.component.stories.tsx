import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { GeneralMessage } from './general-message.component'

type Meta = ComponentMeta<typeof GeneralMessage>
type Story = ComponentStoryObj<typeof GeneralMessage>

export default {
  component: GeneralMessage,
  title: 'Molecules/GeneralMessage',
  decorators: [
    (Story) => {
      return (
        <div style={{ width: 640 }}>
          <Story />
        </div>
      )
    }
  ]
} as Meta

export const Default: Story = {}
