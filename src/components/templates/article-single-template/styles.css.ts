import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const pageHeaderWrapper = style({
  position: 'relative',
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  boxShadow: globalToken.shadow.shadow100
})

export const pageHeaderContainer = style({
  maxWidth: globalToken.screens.large,
  margin: `0 auto`
})

export const pageContentWrapper = style({
  backgroundColor: semanticToken.surface.sunken.bgColor.normal
})

export const pageContentContainer = style({
  maxWidth: globalToken.screens.large,
  margin: `0 auto`,
  paddingTop: globalToken.spacing.large,
  paddingBottom: globalToken.spacing.large,
  paddingLeft: globalToken.spacing.medium,
  paddingRight: globalToken.spacing.medium,
  '@media': {
    [mediaQueries.tablet]: {
      paddingTop: globalToken.spacing.xlarge,
      paddingBottom: globalToken.spacing.xlarge
    }
  }
})

export const pageContentInner = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '@media': {
    [mediaQueries.tablet]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }
})

export const pageContentMainPane = style({
  width: '100%',
  '@media': {
    [mediaQueries.tablet]: {
      width: 'calc(100% - 332px)'
    }
  }
})

export const pageContentAsidePane = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: globalToken.spacing.large,
  marginTop: globalToken.spacing.large,
  '@media': {
    [mediaQueries.tablet]: {
      marginTop: globalToken.spacing.none,
      width: 300
    }
  }
})
