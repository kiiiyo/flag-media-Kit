import { style } from '@vanilla-extract/css'

import { globalToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const container = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: globalToken.spacing.medium,
  paddingBottom: globalToken.spacing.medium,
  paddingLeft: 0,
  paddingRight: 0,
  '@media': {
    [mediaQueries.tablet]: {
      paddingTop: globalToken.spacing.large,
      paddingBottom: globalToken.spacing.large
    }
  }
})

export const imageContainer = style({
  display: 'block',
  position: 'relative',
  width: 80,
  height: 80,
  marginRight: globalToken.spacing.medium,

  '@media': {
    [mediaQueries.tablet]: {
      width: 128,
      height: 128
    }
  }
})

export const image = style({
  borderRadius: 4,
  objectFit: 'cover'
})

export const title = style({
  // FIXME:
  fontSize: 20,
  '@media': {
    [mediaQueries.tablet]: {
      fontSize: 36
    }
  }
})
