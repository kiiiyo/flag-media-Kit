import { style } from '@vanilla-extract/css'
import { semanticToken, globalToken } from '@/styles/theme'

export const root = style({
  position: 'static',
  top: 0,
  zIndex: 10,
  backgroundColor: semanticToken.background.color.layer2
})

export const container = style({
  maxWidth: globalToken.screens.large,
  margin: `0 auto`,
  padding: `0 16px`
})

export const inner = style({
  display: 'flex'
})

/* Brand Style */

export const brandContainer = style({
  display: 'flex',
  alignItems: 'center',
  minHeight: 64
})

export const brandSymbol = style({
  fontSize: 32,
  marginRight: globalToken.spacing.medium
})

export const brandName = style({
  fontSize: 24,
  fontWeight: 'bold'
})

/* Actions Style */

export const actionContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  minHeight: 64,
  marginLeft: 'auto'
})

export const actionButton = style({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: semanticToken.button.regular.backgroundColor.default,
  ':hover': {
    backgroundColor: semanticToken.button.regular.backgroundColor.hover
  }
})

export const actionIcon = style({
  color: semanticToken.iconography.color.default,
  width: 24
})
