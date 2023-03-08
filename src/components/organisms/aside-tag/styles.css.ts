import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'

export const articleTagGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  paddingTop: globalToken.spacing.small,
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
  fontSize: 12
})
