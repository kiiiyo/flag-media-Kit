import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
//import { mediaQueries } from '@/styles/utils'

export const root = style({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  borderRadius: 4,
  boxShadow: globalToken.shadow.shadow100
})

export const paginationAnker = style({
  display: 'flex',
  gap: 4,
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  height: 48,
  textDecoration: 'none',
  minWidth: 104,
  fontSize: 12,
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  ':hover': {
    backgroundColor: semanticToken.surface.default.bgColor.hovered
  },
  ':any-link': {
    color: semanticToken.font.color.subtle
  }
})

export const paginationAnkerIcon = style({
  width: 12
})

export const paginationNext = style({
  borderRadius: '0 4px 4px 0',
  borderLeftStyle: 'solid',
  borderLeftColor: semanticToken.border.color.default,
  borderLeftWidth: 1
})

export const paginationPrevious = style({
  borderRadius: '4px 0 0 4px',
  borderRightStyle: 'solid',
  borderRightColor: semanticToken.border.color.default,
  borderRightWidth: 1
})

export const paginationAnkerDisabled = style({
  pointerEvents: 'none',
  color: semanticToken.font.color.disable,
  ':any-link': {
    color: semanticToken.font.color.disable
  }
})

export const paginationCounter = style({
  display: 'flex',
  gap: 4,
  fontSize: 12,
  color: semanticToken.font.color.subtle,
  justifyContent: 'center',
  alignItems: 'center',
  height: 48
})
