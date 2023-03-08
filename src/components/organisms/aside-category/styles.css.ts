import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'

export const categoryGroup = style({
  margin: globalToken.spacing.none,
  paddingTop: globalToken.spacing.small,
  paddingBottom: globalToken.spacing.small,
  paddingLeft: globalToken.spacing.none,
  paddingRight: globalToken.spacing.none,
  listStyle: 'none'
})

export const categoryItem = style({
  margin: globalToken.spacing.none,
  padding: globalToken.spacing.none,
  listStyle: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  borderBottomColor: semanticToken.border.color.default,
  ':last-child': {
    borderBottomStyle: 'none'
  }
})

export const categoryAnker = style({
  display: 'block',
  textDecoration: 'none',
  paddingTop: globalToken.spacing.medium,
  paddingBottom: globalToken.spacing.medium,
  paddingLeft: globalToken.spacing.small,
  paddingRight: globalToken.spacing.small,
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  fontSize: 14,
  ':any-link': {
    color: semanticToken.font.color.default,
    backgroundColor: semanticToken.surface.default.bgColor.normal
  },
  ':hover': {
    backgroundColor: semanticToken.surface.default.bgColor.hovered
  }
})
