import { createGlobalTheme } from '@vanilla-extract/css'

import { PALETTE, SCREENS, SPACING } from './tokens'

export const global = createGlobalTheme(':root', {
  fonts: '',
  fontSizes: '',
  screens: SCREENS,
  palette: PALETTE,
  spacing: SPACING
})
