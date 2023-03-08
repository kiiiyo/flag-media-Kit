import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'

export const articleTagGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: 48,
  alignItems: 'center',
  gap: globalToken.spacing.small
})

export const articleTag = style({
  margin: 0,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: semanticToken.border.color.default,
  borderRadius: 4
})

export const articleTagMaker = style({})

export const articleTagAnker = style({
  paddingTop: globalToken.spacing.xsmall,
  paddingBottom: globalToken.spacing.xsmall,
  paddingLeft: globalToken.spacing.small,
  paddingRight: globalToken.spacing.small,
  textDecoration: 'none',
  display: 'flex',
  color: semanticToken.font.color.subtle,
  fontSize: 12,
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  ':any-link': {
    backgroundColor: semanticToken.surface.default.bgColor.normal
  },
  ':hover': {
    backgroundColor: semanticToken.surface.default.bgColor.hovered
  },
  ':active': {
    backgroundColor: semanticToken.surface.default.bgColor.pressed
  }
})
