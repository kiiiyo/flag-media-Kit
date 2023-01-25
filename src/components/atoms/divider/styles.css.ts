import { style } from '@vanilla-extract/css'

import { semanticToken } from '@/styles/theme'

export const root = style({
  height: 1,
  border: 'none',
  backgroundColor: semanticToken.border.color.default
})

export const horizon = style({
  height: 1,
  width: '100%'
})

export const vertical = style({
  height: '100%',
  width: 1
})
