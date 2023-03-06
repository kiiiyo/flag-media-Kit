import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const container = style({})

export const group = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'grid',
  gap: globalToken.spacing.large,
  gridTemplateColumns: '1fr',
  '@media': {
    [mediaQueries.tablet]: {
      gridTemplateColumns: '1fr 1fr 1fr'
    },
    [mediaQueries.desktop]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr'
    }
  }
})

export const groupItem = style({
  margin: 0,
  padding: 0,
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  boxShadow: globalToken.shadow.shadow100,
  borderRadius: 4
})

export const groupItemAnker = style({
  color: semanticToken.font.color.default,
  fontWeight: 'bold',
  margin: 0,
  padding: `${globalToken.spacing.medium} ${globalToken.spacing.large}`,
  display: 'block',
  textDecoration: 'none',
  borderRadius: 4,
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  ':hover': {
    backgroundColor: semanticToken.surface.default.bgColor.hovered
  },
  ':active': {
    backgroundColor: semanticToken.surface.default.bgColor.pressed
  }
})
