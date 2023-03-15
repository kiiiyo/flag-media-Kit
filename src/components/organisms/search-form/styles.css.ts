import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const container = style({
  paddingTop: globalToken.spacing.medium,
  paddingBottom: globalToken.spacing.medium
})

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: globalToken.spacing.medium,
  '@media': {
    [mediaQueries.mobile]: {
      maxWidth: '36rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

export const searchTitle = style({
  margin: 0,
  fontSize: 24,
  textAlign: 'center'
})

export const searchKeywordGroup = style({
  position: 'relative',
  display: 'flex',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: semanticToken.border.color.default,
  borderRadius: 4
})

export const searchKeywordTextField = style({
  display: 'block',
  width: '100%',
  outline: 0,
  border: 'none',
  resize: 'none',
  paddingLeft: globalToken.spacing.small,
  paddingRight: globalToken.spacing.small,
  background: semanticToken.surface.default.bgColor.normal
})

export const searchButton = style({
  display: 'flex',
  width: 64,
  height: 48,
  justifyContent: 'center',
  alignItems: 'center',
  outline: 0,
  border: 'none',
  resize: 'none',
  cursor: 'pointer',
  background: semanticToken.surface.sunken.bgColor.normal
})

export const searchButtonIcon = style({
  color: semanticToken.iconography.color.default,
  width: 24
})
