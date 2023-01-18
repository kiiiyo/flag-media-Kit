import { style } from '@vanilla-extract/css'
import { mediaQueries } from '@/styles/utils'
import { globalToken } from '@/styles/theme'

export const root = style({
  maxWidth: globalToken.screens.large,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: globalToken.spacing.large,
  paddingBottom: globalToken.spacing.large
})

export const container = style({
  display: 'grid',
  gridGap: globalToken.spacing.large,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@media': {
    [mediaQueries.desktop]: {
      gridTemplateColumns: 'repeat(5, 1fr)'
    },
    [mediaQueries.tablet]: {
      gridTemplateColumns: 'repeat(3s, 1fr)'
    }
  }
})
