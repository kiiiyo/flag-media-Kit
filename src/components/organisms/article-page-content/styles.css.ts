import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
// import { mediaQueries } from '@/styles/utils'

export const root = style({
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  boxShadow: globalToken.shadow.shadow100,
  padding: globalToken.spacing.medium,
  minHeight: 480,
  borderRadius: 4
})

export const content = style({
  margin: 0
})
