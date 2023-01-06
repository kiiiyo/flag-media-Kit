import { GRID, toPixel } from '../utils'

export const SPACING = {
  none: '0',
  xsmall: toPixel(1 * GRID),
  small: toPixel(2 * GRID),
  medium: toPixel(3 * GRID),
  large: toPixel(5 * GRID),
  xlarge: toPixel(8 * GRID),
  xxlarge: toPixel(12 * GRID),
  xxxlarge: toPixel(24 * GRID)
}