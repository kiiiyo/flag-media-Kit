import { style } from '@vanilla-extract/css'
import { globalToken } from '@/styles/theme/'

export const container = style({
  maxWidth: globalToken.screens.large,
  margin: `0 auto`
})

export const inner = style({
  paddingTop: globalToken.spacing.large,
  paddingBottom: globalToken.spacing.large,
  paddingLeft: 0,
  paddingRight: 0
})
