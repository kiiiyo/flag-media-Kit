import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'

export const root = style({
  backgroundColor: semanticToken.surface.default.bgColor.normal,
  boxShadow: globalToken.shadow.shadow100,
  minHeight: 96,
  borderRadius: 4
})

/*
 * Card Header
 */

export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  paddingTop: globalToken.spacing.medium,
  paddingBottom: globalToken.spacing.small,
  minHeight: 24,
  gap: globalToken.spacing.small,
  paddingLeft: globalToken.spacing.medium,
  paddingRight: globalToken.spacing.medium
})

export const cardHeaderTitle = style({
  margin: 0,
  fontSize: 14,
  color: semanticToken.font.color.default
})

export const cardHeaderIcon = style({
  display: 'flex',
  justifyContent: 'flex-start',
  // FIXME:
  ':first-child': {
    width: 20,
    color: semanticToken.iconography.color.default
  }
})

/*
 * Card Content
 */

export const cardContent = style({
  paddingLeft: globalToken.spacing.medium,
  paddingRight: globalToken.spacing.medium,
  paddingBottom: globalToken.spacing.small,
  color: semanticToken.font.color.default
})

/*
 * Card Footer
 */

export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: globalToken.spacing.small,
  paddingBottom: globalToken.spacing.medium,
  minHeight: 24,
  gap: globalToken.spacing.xsmall,
  paddingLeft: globalToken.spacing.medium,
  paddingRight: globalToken.spacing.medium
})
