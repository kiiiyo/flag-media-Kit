import { createTheme } from '@vanilla-extract/css'

import { themeToken } from './contract.css'
import { PALETTE } from './tokens'

export const darkTheme = createTheme(themeToken, {
  font: {
    color: {
      default: PALETTE.white
    }
  },
  background: {
    color: {
      base: PALETTE.gray900,
      layer1: PALETTE.gray800,
      layer2: PALETTE.gray700
    }
  },
  iconography: {
    color: {
      default: PALETTE.white
    }
  },
  button: {
    regular: {
      backgroundColor: {
        default: PALETTE.gray700,
        hover: PALETTE.gray800,
        focus: PALETTE.gray800,
        active: PALETTE.gray800
      }
    }
  }
})
