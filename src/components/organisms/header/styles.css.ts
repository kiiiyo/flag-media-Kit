import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const root = style({
  position: 'static',
  top: 0,
  zIndex: 10,
  backgroundColor: semanticToken.surface.default.bgColor.normal
})

export const container = style({
  maxWidth: globalToken.screens.large,
  margin: `0 auto`,
  padding: `0 16px`
})

export const inner = style({
  display: 'flex',
  alignItems: 'center'
})

/* Brand Style */

export const brandContainer = style({
  display: 'flex',
  alignItems: 'center',
  minHeight: 64
})

export const brandSymbol = style({
  fontSize: 20,
  marginRight: globalToken.spacing.small,
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: 32,
      marginRight: globalToken.spacing.medium
    }
  }
})

export const brandName = style({
  fontSize: 16,
  fontWeight: 'bold',
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: 24
    }
  }
})

/* Actions Style */

export const actionContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: 40,
  marginLeft: 'auto',
  gap: globalToken.spacing.xsmall,
  '@media': {
    [mediaQueries.mobile]: {
      gap: globalToken.spacing.small
    }
  }
})

export const actionButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  ':hover': {
    backgroundColor: semanticToken.surface.default.bgColor.hovered
  },
  ':active': {
    backgroundColor: semanticToken.surface.default.bgColor.pressed
  }
})

export const actionIcon = style({
  color: semanticToken.iconography.color.default,
  width: 24
})
