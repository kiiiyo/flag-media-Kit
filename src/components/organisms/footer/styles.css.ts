import { style } from '@vanilla-extract/css'
import { semanticToken, globalToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const root = style({
  backgroundColor: semanticToken.background.color.layer2
})

export const container = style({
  maxWidth: globalToken.screens.large,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: globalToken.spacing.medium,
  paddingRight: globalToken.spacing.medium
})

/* Navigation */

export const navigationContainer = style({
  paddingTop: globalToken.spacing.xlarge,
  paddingBottom: globalToken.spacing.xlarge,
  display: 'grid',
  gap: globalToken.spacing.xlarge,
  '@media': {
    [mediaQueries.tablet]: {
      gridTemplateColumns: 'repeat(5,minmax(0,1fr))'
    }
  }
})

/* Brand */

export const brandContainer = style({
  gridColumn: 'span 2/span 2'
})

export const brandGroup = style({
  display: 'flex',
  alignItems: 'center'
})

export const brandSymbol = style({
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // TODO: Setup token
  fontSize: 32,
  marginRight: 4
})

export const brandName = style({
  fontWeight: 'bold',
  // TODO: Setup token
  fontSize: 24
})

export const brandDescription = style({
  marginTop: globalToken.spacing.small
})

/* Menu */

export const menuTitle = style({
  fontWeight: 'bold',
  fontSize: 16,
  color: semanticToken.font.color.subtle,
  marginTop: globalToken.spacing.medium,
  marginBottom: globalToken.spacing.medium
})

export const menuGroup = style({
  margin: 0,
  padding: 0,
  listStyle: 'none'
})

export const menuItem = style({
  marginTop: globalToken.spacing.small
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
