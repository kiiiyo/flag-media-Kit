import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { AsideShare } from './aside-share.component'

type Meta = ComponentMeta<typeof AsideShare>
type Story = ComponentStoryObj<typeof AsideShare>

export default {
  component: AsideShare,
  title: 'Organisms/AsideShare',
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
