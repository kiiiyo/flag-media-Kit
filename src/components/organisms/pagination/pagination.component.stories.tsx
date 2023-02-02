import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Pagination } from './pagination.component'

type Meta = ComponentMeta<typeof Pagination>
type Story = ComponentStoryObj<typeof Pagination>

export default {
  component: Pagination,
  title: 'Organisms/Pagination',

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

export const Default: Story = {
  args: {
    isDisableNext: false,
    isDisablePrevious: false,
    totalPageCount: 1,
    currentPageCount: 1,
    previousLink: '#',
    nextLink: '#'
  }
}
