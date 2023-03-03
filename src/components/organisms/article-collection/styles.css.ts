import { ComplexStyleRule, style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'
import { mediaQueries } from '@/styles/utils'

export const article = style({
  marginTop: globalToken.spacing.xlarge,
  padding: globalToken.spacing.medium,
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  borderRadius: 4,
  boxShadow: globalToken.shadow.shadow100,
  ':first-child': {
    marginTop: 0
  }
})

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [mediaQueries.mobile]: {
      flexDirection: 'row'
    }
  }
})

export const articleImageAnker = style({
  textDecoration: 'none'
})

export const articleImageWrapper = style({
  display: 'block',
  position: 'relative',
  width: '100%',
  height: 200,

  '@media': {
    [mediaQueries.mobile]: {
      width: 128,
      height: 128
    }
  }
})

export const articleImage = style({
  borderRadius: 4,
  objectFit: 'cover'
})

export const articleBody = style({
  display: 'flex',
  flexDirection: 'column',
  gap: globalToken.spacing.xsmall,
  marginTop: globalToken.spacing.medium,
  paddingLeft: 0,
  '@media': {
    [mediaQueries.mobile]: {
      marginTop: 0,
      paddingLeft: globalToken.spacing.medium
    }
  }
})

export const articleCategory = style({
  margin: 0,
  lineHeight: 1
})

export const articleCategoryAnker = style({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: semanticToken.font.color.default,
  fontSize: 12
})

export const articleTitle = style({
  margin: 0,
  fontSize: 16,
  lineHeight: 1.5,
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2
} as ComplexStyleRule)

export const articleTitleAnker = style({
  textDecoration: 'none',
  fontWeight: 700,
  color: semanticToken.font.color.default
})

export const articleMeta = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: globalToken.spacing.small,
  height: 20
})

export const articleMetaDivider = style({
  margin: 0
})

export const articleDate = style({
  color: semanticToken.font.color.subtle,
  fontSize: 12
})

export const articleUser = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
})

export const articleUserIcon = style({
  color: semanticToken.iconography.color.default,
  width: 20,
  marginRight: globalToken.spacing.xsmall
})

export const articleUserName = style({
  margin: 0,
  color: semanticToken.font.color.subtle,
  fontSize: 12
})

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
