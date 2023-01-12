import { style } from '@vanilla-extract/css'
import { themeToken, globalToken } from '@/styles/theme/'

export const root = style({
  position: 'static',
  top: 0,
  zIndex: 10,
  backgroundColor: themeToken.background.color.layer2
})

export const container = style({
  maxWidth: globalToken.screens.medium,
  margin: `0 auto`,
  padding: `0 16px`
})

export const inner = style({
  display: 'flex'
})

/* Brand Style */

export const brandContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  minHeight: 64
})

export const brandSymbol = style({
  fontSize: 32,
  marginRight: globalToken.spacing.medium
})

export const brandName = style({
  fontSize: 18,
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
  background: 'none'
})

export const actionIcon = style({
  color: themeToken.iconography.color.default,
  width: 24
})
