import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const container = style({
  width: '100%',
  minHeight: 360,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: semanticToken.border.color.default,
  borderRadius: 4
})

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: globalToken.spacing.small
})

export const iconContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  width: 40,
  color: semanticToken.iconography.color.default,
  marginBottom: globalToken.spacing.small,
  '@media': {
    [mediaQueries.tablet]: {
      width: 56
    }
  }
})

export const title = style({
  margin: 0,
  fontWeight: 'bold',
  //TODO
  fontSize: 24
})

export const description = style({
  margin: 0,
  //TODO
  fontSize: 16
})

export const content = style({
  marginTop: globalToken.spacing.large
})
