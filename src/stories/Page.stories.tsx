import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Page } from './Page'

type Meta = ComponentMeta<typeof Page>
type Story = ComponentStoryObj<typeof Page>

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: Page,
  title: 'Example/Page'
} as Meta

export const Default: Story = {}
