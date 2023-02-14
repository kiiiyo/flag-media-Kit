import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'

export const root = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  gap: globalToken.spacing.xsmall,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: semanticToken.border.color.default,
  borderRadius: 4
})

export const icon = style({
  width: 32,
  color: semanticToken.iconography.color.default
})

export const text = style({
  color: semanticToken.font.color.default,
  fontSize: 12,
  fontWeight: 'normal',
  textDecoration: 'none'
})
