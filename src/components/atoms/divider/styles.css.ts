import { style } from '@vanilla-extract/css'
import { themeToken } from '@/styles/theme'

export const root = style({
  height: 1,
  border: 'none',
  backgroundColor: themeToken.border.color.default
})
