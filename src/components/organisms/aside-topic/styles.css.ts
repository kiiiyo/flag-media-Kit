import { style } from '@vanilla-extract/css'

import { globalToken, semanticToken } from '@/styles/theme'

export const topicGroup = style({
  margin: globalToken.spacing.none,
  padding: globalToken.spacing.none,
  listStyle: 'none'
})

export const topicItem = style({
  margin: globalToken.spacing.none,
  padding: globalToken.spacing.none,
  listStyle: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  borderBottomColor: semanticToken.border.color.default,
  ':last-child': {
    borderBottomStyle: 'none'
  }
})

export const topicAnker = style({
  display: 'flex',
  textDecoration: 'none',
  paddingTop: globalToken.spacing.medium,
  paddingBottom: globalToken.spacing.medium,
  fontSize: 14,
  fontWeight: 'bold',
  ':any-link': {
    color: semanticToken.font.color.subtle
  },
  ':hover': {
    color: semanticToken.font.color.default
  }
})

export const topicImageContainer = style({
  display: 'block',
  position: 'relative',
  width: 72,
  height: 72,
  maxHeight: 72,
  maxWidth: 72,
  overflow: 'hidden',
  marginRight: globalToken.spacing.small
})

export const topicImage = style({
  objectFit: 'cover',
  borderRadius: 4
})

export const topicText = style({
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0
})
