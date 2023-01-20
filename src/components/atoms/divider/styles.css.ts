import { style } from '@vanilla-extract/css'
import { semanticToken } from '@/styles/theme'

export const root = style({
  height: 1,
  border: 'none',
  backgroundColor: semanticToken.border.color.default
})
