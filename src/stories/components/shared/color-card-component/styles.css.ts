import { style } from '@vanilla-extract/css'

import { globalToken } from '@/styles/theme'

export const root = style({
  borderStyle: 'solid',
  borderColor: globalToken.palette.gray300,
  borderRadius: 4,
  borderWidth: 1
})

export const palette = style({
  paddingTop: '75%'
})

export const meta = style({
  display: 'flex',
  flexDirection: 'column',
  padding: globalToken.spacing.medium
})

export const metaName = style({
  fontSize: 12,
  fontWeight: 'bold'
})

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0'
})

export const metaLabel = style({
  fontSize: 12,
  fontWeight: 'bold',
  color: globalToken.palette.gray400,
  minWidth: 56
})

export const metaValue = style({
  fontSize: 14
})
