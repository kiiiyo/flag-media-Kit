import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const container = style({
  display: 'flex'
})

export const iconContainer = style({
  display: 'flex',
  width: 24,
  color: semanticToken.iconography.color.default,
  marginRight: globalToken.spacing.xsmall,
  '@media': {
    [mediaQueries.tablet]: {
      width: 40,
      marginRight: globalToken.spacing.small
    }
  }
})

export const title = style({
  // FIXME:
  fontSize: 16,
  '@media': {
    [mediaQueries.tablet]: {
      fontSize: 28
    }
  }
})
