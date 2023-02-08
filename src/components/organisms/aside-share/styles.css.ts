import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'

export const buttonGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 64,
  gap: globalToken.spacing.large
})

export const buttonItem = style({
  display: 'flex',
  width: 48,
  height: 48,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: semanticToken.border.color.default,
  borderRadius: 8,
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

export const buttonIcon = style({
  width: 20,
  height: 20,
  color: semanticToken.iconography.color.default,
  fill: semanticToken.iconography.color.default
})
