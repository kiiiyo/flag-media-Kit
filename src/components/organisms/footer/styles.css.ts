import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const root = style({
  backgroundColor: semanticToken.surface.default.bgColor.normal
})

export const container = style({
  maxWidth: globalToken.screens.large,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 0,
  paddingBottom: globalToken.spacing.xlarge,
  paddingLeft: globalToken.spacing.medium,
  paddingRight: globalToken.spacing.medium
})

/* Navigation */

export const navigationContainer = style({
  paddingTop: globalToken.spacing.xxlarge,
  paddingBottom: globalToken.spacing.xxlarge,
  display: 'grid',
  gap: globalToken.spacing.xxlarge,
  '@media': {
    [mediaQueries.tablet]: {
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))'
    }
  }
})

/* Brand */

export const brandContainer = style({
  display: 'none',
  '@media': {
    [mediaQueries.tablet]: {
      display: 'block'
    }
  }
})

export const brandGroup = style({
  display: 'flex',
  alignItems: 'center'
})

export const brandSymbol = style({
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // TODO: Setup token
  fontSize: 24,
  marginRight: 4
})

export const brandName = style({
  fontWeight: 'bold',
  // TODO: Setup token
  fontSize: 16
})

export const brandDescription = style({
  marginTop: globalToken.spacing.small
})

/* Menu */

export const menuGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: globalToken.spacing.small,
  '@media': {
    [mediaQueries.tablet]: {
      gap: globalToken.spacing.medium
    }
  }
})

export const menuTitle = style({
  fontWeight: 'bold',
  fontSize: 14,
  color: semanticToken.font.color.subtle,
  marginTop: 0,
  marginBottom: 0
})

export const menuList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: globalToken.spacing.small
})

export const menuItem = style({
  margin: 0
})

export const menuItemAnker = style({
  ':any-link': {
    color: semanticToken.font.color.default
  },
  ':hover': {
    color: semanticToken.font.color.subtle
  }
})

/* Copyright */

export const copyrightContainer = style({
  textAlign: 'center'
})

export const copyrightText = style({
  display: 'inline-block',
  paddingLeft: globalToken.spacing.xsmall,
  paddingRight: globalToken.spacing.xsmall
})

export const copyrightAnker = style({
  ':any-link': {
    color: semanticToken.font.color.default
  },
  ':hover': {
    color: semanticToken.font.color.subtle
  }
})
