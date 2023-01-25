import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const wrapper = style({
  backgroundColor: semanticToken.surface.sunken.bgColor.normal
})

export const container = style({
  maxWidth: globalToken.screens.large,
  margin: `0 auto`,
  paddingTop: globalToken.spacing.large,
  paddingBottom: globalToken.spacing.large,
  paddingLeft: globalToken.spacing.medium,
  paddingRight: globalToken.spacing.medium,
  '@media': {
    [mediaQueries.tablet]: {
      paddingTop: globalToken.spacing.xlarge,
      paddingBottom: globalToken.spacing.xxlarge
    }
  }
})

export const inner = style({
  width: '100%'
})
