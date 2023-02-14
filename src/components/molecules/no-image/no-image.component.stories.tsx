import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { NoImage } from './no-image.component'

type Meta = ComponentMeta<typeof NoImage>
type Story = ComponentStoryObj<typeof NoImage>

export default {
  component: NoImage,
  title: 'Molecules/NoImage',
  decorators: [
    (Story) => {
      return (
        <div style={{ width: 200, height: 160 }}>
          <Story />
        </div>
      )
    }
  ]
} as Meta

export const Default: Story = {}
