import { createGlobalTheme } from '@vanilla-extract/css'

import { FONT, PALETTE, SCREENS, SPACING } from './tokens'

export const global = createGlobalTheme(':root', {
  font: FONT,
  screens: SCREENS,
  palette: PALETTE,
  spacing: SPACING
})
